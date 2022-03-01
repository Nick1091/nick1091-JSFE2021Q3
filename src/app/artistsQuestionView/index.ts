import Control from '../../common/control';
import { IArtistsQuestionData } from '../interfaces';
import { AnimatedControl } from '../animatedControl/index';
import './artistsQuestionView.scss';

export class ArtistsQuestionView extends AnimatedControl {
  onAnswer: (index: number) => void;

  constructor(parentNode: HTMLElement, questionData: IArtistsQuestionData) {
    super(parentNode, 'div', { default: 'wrapper-art', hidden: 'hide' });
    this.quickOut();
    const questions = new Control(this.node, 'div', 'question_artists', 'Кто автор этой картины?');
    const answersArtist = new Control(this.node, 'div', 'answers_artists');
    const img = new Image(200, 200);
    img.src = questionData.artistsUrl;
    questions.node.append(img);
    questionData.answers.map((it, i) => {
      const button = new Control(answersArtist.node, 'button', '', it.toString());
      button.node.onclick = () => {
        this.onAnswer(i);
      };
    });
  }
}
