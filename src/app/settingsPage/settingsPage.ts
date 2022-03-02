import Control from '../../common/control';
import { AnimatedControl } from '../animatedControl/index';
import { IQuizSettings } from '../interfaces';
import './settingsPage.scss';

const defaultSettings: IQuizSettings = {
  time: 10,
  timeEnable: false,
  volume: 0,
  volumeEnable: false,
};
export class SettingsModel {
  private settings: IQuizSettings;

  loadFromStorage() {
    const storageData = localStorage.getItem('settings');
    const checkStorageData = (data: string | null) => !!data;
    if (!checkStorageData(storageData)) {
      this.settings = defaultSettings;
    } else {
      const data: IQuizSettings = JSON.parse(storageData);
      this.settings = data;
    }
  }

  getData() {
    return JSON.parse(JSON.stringify(this.settings));
  }

  setData(data: IQuizSettings) {
    this.settings = data;
    this.saveTOStorage();
  }

  saveTOStorage() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }
}

export class SettingsPage extends AnimatedControl {
  onBack: () => void;

  onSave: (settings: IQuizSettings) => void;

  constructor(parentNode: HTMLElement, initialSettings: IQuizSettings) {
    super(parentNode, 'div', { default: 'settings', hidden: 'hide' });

    const settings: IQuizSettings = initialSettings;
    const backButton = new Control(this.node, 'button', 'button_main', 'назад');
    backButton.node.onclick = () => {
      this.onBack();
    };

    const timeBlock = new Control<HTMLInputElement>(this.node, 'div', 'time_block', 'Игра на время');
    const timeInput = new Control<HTMLInputElement>(timeBlock.node, 'input');
    timeInput.node.className = 'range';
    timeInput.node.type = 'range';
    timeInput.node.min = (5).toString();
    timeInput.node.max = (30).toString();
    timeInput.node.step = (5).toString();
    timeInput.node.value = settings.time.toString();
    timeInput.node.style.background = `linear-gradient(to right, #ffcb0f 0%, #ffcb0f ${
      (+timeInput.node.value - 5) * 4
    }%, #ffffff ${(+timeInput.node.value - 5) * 4}%, #ffffff 100%)`;
    timeInput.node.oninput = () => {
      timeInput.node.style.background = `linear-gradient(to right, #ffcb0f 0%, #ffcb0f ${
        (+timeInput.node.value - 5) * 4
      }%, #ffffff ${(+timeInput.node.value - 5) * 4}%, #ffffff 100%)`;
      settings.time = timeInput.node.valueAsNumber;
    };
    const timeCheck = new Control<HTMLInputElement>(timeBlock.node, 'button', 'checkbox-group');
    const root = '<label for="time_game" class="label_checkbox"></label>';
    timeCheck.node.innerHTML = root;
    const timeCheckBox = new Control<HTMLInputElement>(timeCheck.node, 'input', 'time_game');
    timeCheckBox.node.id = 'time_game';
    timeCheckBox.node.type = 'checkbox';
    timeCheckBox.node.checked = settings.timeEnable;
    const p = document.createElement('p');
    p.innerHTML = 'Вкл / Выкл';
    timeBlock.node.append(p);
    (<HTMLElement>document.querySelectorAll('.label_checkbox')[0]).style.left = timeCheckBox.node.checked
      ? '27px'
      : '3px';

    timeCheckBox.node.addEventListener('click', () => {
      (<HTMLElement>document.querySelectorAll('.label_checkbox')[0]).style.left = timeCheckBox.node.checked
        ? '27px'
        : '3px';
      settings.timeEnable = timeCheckBox.node.checked;
    });

    const volumeBlock = new Control<HTMLInputElement>(this.node, 'div', 'volume_block', 'Громкость');
    const volumeInput = new Control<HTMLInputElement>(volumeBlock.node, 'input');
    volumeInput.node.className = 'range_volume';
    volumeInput.node.type = 'range';
    volumeInput.node.min = (0).toString();
    volumeInput.node.max = (100).toString();
    volumeInput.node.step = (1).toString();
    volumeInput.node.value = settings.volume.toString();
    volumeInput.node.style.background = `linear-gradient(to right, #ffcb0f 0%, #ffcb0f ${+volumeInput.node
      .value}%, #ffffff ${+volumeInput.node.value}%, #ffffff 100%)`;
    settings.volume = volumeInput.node.valueAsNumber;
    volumeInput.node.oninput = () => {
      volumeInput.node.style.background = `linear-gradient(to right, #ffcb0f 0%, #ffcb0f ${+volumeInput.node
        .value}%, #ffffff ${+volumeInput.node.value}%, #ffffff 100%)`;
      settings.volume = volumeInput.node.valueAsNumber;
    };
    const volumeCheck = new Control<HTMLInputElement>(volumeBlock.node, 'button', 'checkbox-group');
    const volumeRoot = '<label for="volume_game" class="label_checkbox"></label>';
    volumeCheck.node.innerHTML = volumeRoot;
    const volumeCheckBox = new Control<HTMLInputElement>(volumeCheck.node, 'input', 'time_game');
    volumeCheckBox.node.id = 'volume_game';
    volumeCheckBox.node.type = 'checkbox';
    volumeCheckBox.node.checked = settings.volumeEnable;
    const elem = document.createElement('p');
    elem.innerHTML = 'Вкл / Выкл';
    volumeBlock.node.append(elem);

    (<HTMLElement>document.querySelectorAll('.label_checkbox')[1]).style.left = volumeCheckBox.node.checked
      ? '27px'
      : '3px';

    volumeCheckBox.node.addEventListener('click', () => {
      (<HTMLElement>document.querySelectorAll('.label_checkbox')[1]).style.left = volumeCheckBox.node.checked
        ? '27px'
        : '3px';
      settings.volumeEnable = volumeCheckBox.node.checked;
    });

    const saveButton = new Control(this.node, 'button', 'button_main', 'сохранить');
    saveButton.node.onclick = () => {
      this.onSave(settings);
    };
  }
}
