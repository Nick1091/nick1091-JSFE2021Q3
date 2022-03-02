import Control from '../../common/control';
import { IQuestionView, IQuizData, IQuizOptions, IQuizResults } from '../interfaces';
import { soundManager } from '../soundManager/soundManager';
import { AnimatedControl } from '../animatedControl/index';
import { Timer } from '../timer/timer';
import './gameFieldPage.scss';

interface IQuestionViewConstructor<DataType> {
  new (parentNode: HTMLElement, data: DataType): IQuestionView & AnimatedControl;
}

export class GameFieldPage<QuestionDataType> extends AnimatedControl {
  onBack: () => void;

  onHome: () => void;

  onFinish: (results: IQuizResults, dataModel: IQuizData) => void;

  progressQuestion: Control<HTMLElement>;

  results: IQuizResults;

  answersIndicator: Control<HTMLElement>;

  timer: Timer;

  gameOptions: IQuizOptions;

  private GameQuestionConstructor: IQuestionViewConstructor<QuestionDataType>;

  constructor(
    parentNode: HTMLElement,
    GameQuestionConstructor: IQuestionViewConstructor<QuestionDataType>,
    gameOptions: IQuizOptions,
    questionsData: Array<QuestionDataType>
  ) {
    super(parentNode, 'div', { default: 'game_field', hidden: 'hide' });
    this.GameQuestionConstructor = GameQuestionConstructor;
    this.gameOptions = gameOptions;

    const buttons = new Control(this.node, 'div', 'btns');
    const backButton = new Control(buttons.node, 'button', 'btn', 'назад');
    backButton.node.onclick = () => {
      this.onBack();
    };
    const homeButton = new Control(buttons.node, 'button', 'btn', 'на главную');
    homeButton.node.onclick = () => {
      this.onHome();
    };

    this.timer = new Timer(this.node);
    this.progressQuestion = new Control(this.node, 'div', '', 'Вопрос');

    this.answersIndicator = new Control(this.node, 'div', 'dots', '');
    questionsData.map(() => new Control(this.answersIndicator.node, 'p', 'dot'));

    this.results = [];
    this.questionCycle(gameOptions.gameName, questionsData, 0, () => {
      if (gameOptions.gameName === 'artists') {
        gameOptions.dataModel.artists[this.gameOptions.categoryIndex] = this.results;
      }
      if (gameOptions.gameName === 'pictures') {
        gameOptions.dataModel.pictures[this.gameOptions.categoryIndex] = this.results;
      }
      this.onFinish(this.results, gameOptions.dataModel);
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  questionCycle(gameName: string, questions: Array<any>, index: number, onFinish: () => void) {
    if (index >= questions.length) {
      onFinish();
      return;
    }

    let Quest: Control;
    this.results.map((it, i: number) =>
      it
        ? ((<HTMLElement>document.querySelectorAll('.dot')[i]).style.backgroundColor = '#ffcb0f')
        : ((<HTMLElement>document.querySelectorAll('.dot')[i]).style.backgroundColor = '#ae0101')
    );

    this.progressQuestion.node.textContent = `Вопрос ${index + 1} / ${questions.length}`;
    if (this.gameOptions.settings.timeEnable) {
      this.timer.start(this.gameOptions.settings.time);
      this.timer.onTimeout = () => {
        Quest.destroy();
        this.results.push(false);
        soundManager.fail(this.gameOptions.settings);
        this.questionCycle(gameName, questions, index + 1, onFinish);
      };
    }
    const question = new this.GameQuestionConstructor(this.node, questions[index]);
    question.animateIN();
    Quest = question;
    question.onAnswer = (answerIndex) => {
      question.animateOut().then(() => {
        question.destroy();
        if (answerIndex === questions[index].correctAnswerIndex) {
          soundManager.correctAudio(this.gameOptions.settings);
        } else {
          soundManager.fail(this.gameOptions.settings);
        }
        this.results.push(answerIndex === questions[index].correctAnswerIndex);
        this.questionCycle(gameName, questions, index + 1, onFinish);
      });
    };
  }

  destroy(): void {
    this.timer.stop();
    super.destroy();
  }
}
