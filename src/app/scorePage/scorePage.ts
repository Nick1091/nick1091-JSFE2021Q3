import Control from '../../common/control';
import { IPictureData, IQuizResults } from '../interfaces';
import { AnimatedControl } from '../animatedControl/index';
import './scorePage.scss';

class ScoreItem extends Control {
  constructor(parentNode: HTMLElement, data: IPictureData, it: boolean) {
    super(parentNode, 'div', 'score_img');
    new Control(this.node, 'div', '', `Автор: ${data.author}`);
    new Control(this.node, 'div', '', `Год: ${data.year}`);
    new Control(this.node, 'div', '', `Название ${data.name}`);

    const url = `https://raw.githubusercontent.com/Nick1091/image-data/master/img/${data.imageNum}.jpg`;
    const img = new Image(200, 200);
    img.src = url;
    this.node.append(img);
    img.style.filter = !it ? 'grayscale(1)' : 'grayscale(0)';
  }
}

export class ScorePage extends AnimatedControl {
  onBack: () => void;

  constructor(parentNode: HTMLElement, index: number, score: IQuizResults, data: IPictureData[]) {
    super(parentNode, 'div', { default: 'score_page', hidden: 'hide' });
    this.quickOut();
    const scoreWrapper = new Control(this.node, 'div', 'score_panel');

    const backButton = new Control(scoreWrapper.node, 'button', 'score_back', 'назад');
    backButton.node.onclick = () => {
      this.onBack();
    };

    const scoreContainer = new Control(this.node, 'div', 'score_container');

    const arrData = data.slice(index * 10, index * 10 + 10);
    score.map((it, i) => new ScoreItem(scoreContainer.node, arrData[i], it));
  }
}
