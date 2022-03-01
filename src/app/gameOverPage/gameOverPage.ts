import Control from '../../common/control';
import { AnimatedControl } from '../animatedControl/index';
import './gameOverPage.scss';

export class GameOverPage extends AnimatedControl {
  onNext: () => void;

  onHome: () => void;

  constructor(parentNode: HTMLElement, results: Array<boolean>) {
    super(parentNode, 'div', { default: 'game_finish', hidden: 'hide' });
    const buttonBlock = new Control(this.node, 'div', 'block_button', '');
    const nextButton = new Control(buttonBlock.node, 'button', '', 'следующий раунд');
    nextButton.node.onclick = () => {
      this.onNext();
    };
    const homeButton = new Control(buttonBlock.node, 'button', '', 'на главную');
    homeButton.node.onclick = () => {
      this.onHome();
    };
    const blockResult = new Control(this.node, 'div', 'block_result', 'Поздравляем');
    const imgSettings = '../../assets/svg/present.svg';
    const img = new Image(200, 200);
    img.src = imgSettings;
    blockResult.node.append(img);
    const resultIndicator = new Control(blockResult.node, 'div', 'result', '');
    resultIndicator.node.textContent = `Ваш результат раунда: ${
      results.filter((it: boolean) => it === true).length
    } / 10`;
  }
}
