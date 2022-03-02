import Control from '../../common/control';
import './startPage.scss';

import { AnimatedControl } from '../animatedControl/index';

export class StartPage extends AnimatedControl {
  onSettings: () => void;

  onGameSelect: (gameName: string) => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', { default: 'main_wrapper', hidden: 'hide' });
    this.quickOut();

    const settingsWrapper = new Control(this.node, 'div', 'main_bottom');
    const settingsButton = new Control(settingsWrapper.node, 'button', 'button');
    const imgSettings = '../assets/svg/carbon_settings.svg';
    const img = new Image(24, 24);
    img.src = imgSettings;
    settingsButton.node.append(img);

    new Control(this.node, 'div', 'main_logo');

    const selectWrapper = new Control(this.node, 'div', 'select_wrapper');
    const picturesButton = new Control(selectWrapper.node, 'button', 'select_item', 'Картины');
    picturesButton.node.onclick = () => this.onGameSelect('pictures');

    const artistsButton = new Control(selectWrapper.node, 'button', 'select_item', 'Художники');
    artistsButton.node.onclick = () => this.onGameSelect('artists');

    settingsButton.node.onclick = () => this.onSettings();
  }
}
