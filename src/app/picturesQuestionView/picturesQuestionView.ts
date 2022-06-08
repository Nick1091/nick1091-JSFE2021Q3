import Control from '../../common/control';
import { IPicturesQuestionData } from '../interfaces';
import { AnimatedControl } from '../animatedControl/index';
import './picturesQuestionView.scss';

export class PicturesQuestionView extends AnimatedControl {
  onAnswer: (index: number) => void;

  constructor(parentNode: HTMLElement, questionData: IPicturesQuestionData) {
    super(parentNode, 'div', { default: 'wrapper', hidden: 'hide' });
    this.quickOut();
    new Control(this.node, 'div', '', `Какую из картин написал ${questionData.artistsName} ?`);
    const blockPictures = new Control(this.node, 'div', 'block_pictures');
    questionData.answers.map((it, i) => {
      const button = new Control(blockPictures.node, 'button', '');
      const img = new Image(200, 200);
      img.src = it;
      button.node.append(img);
      button.node.onclick = () => {
        this.onAnswer(i);
      };
    });
  }
}
