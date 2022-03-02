import Control from '../../common/control';
import { ICategoryData, IQuizData, IQuizResults } from '../interfaces';
import { AnimatedControl } from '../animatedControl/index';
import './categoriesPage.scss';

interface ICategoryController {
  onScore: () => void;

  onSelect: () => void;
}
class CategoryItem extends Control {
  constructor(
    parentNode: HTMLElement,
    data: ICategoryData,
    i: number,
    controller: ICategoryController,
    dataModel: IQuizResults[]
  ) {
    super(parentNode, 'div', 'category');
    const rightAnswers = dataModel[i].length > 0 ? dataModel[i].filter((it) => it).length : false;
    const header = new Control(this.node, 'div', 'category_round', `Раунд ${(i + 1).toString()}`);
    new Control(header.node, 'span', '', `${rightAnswers ? `${rightAnswers}/10` : ''}`);

    const buttonImg = new Control(this.node, 'div', 'category_img');
    buttonImg.node.style.backgroundImage = `url('${data.picture}')`;
    buttonImg.node.style.filter = !rightAnswers ? 'grayscale(1)' : 'grayscale(0)';
    buttonImg.node.onclick = () => {
      controller.onSelect();
    };
    const score = new Control(this.node, 'div', 'category_score', 'score');
    score.node.style.display = !rightAnswers ? 'none' : 'category_score';
    score.node.onclick = () => {
      controller.onScore();
    };
  }
}

export class CategoriesPage extends AnimatedControl {
  onBack: () => void;

  onSelect: (index: number) => void;

  onScore: (index: number, score: IQuizResults) => void;

  constructor(
    parentNode: HTMLElement,
    gameName: string,
    quizCategoriesData: Array<ICategoryData>,
    dataModel: IQuizData
  ) {
    super(parentNode, 'div', { default: 'categories_page', hidden: 'hide' });
    this.quickOut();
    const headerWrapper = new Control(this.node, 'div', 'head_panel');

    const backButton = new Control(headerWrapper.node, 'button', 'button_back', 'назад');
    backButton.node.onclick = () => {
      this.onBack();
    };
    new Control(headerWrapper.node, 'h1', 'head_name', `${gameName === 'pictures' ? 'Картины' : 'Художники'}`);
    const categoryContainer = new Control(this.node, 'div', 'categories');
    const partQuiz = gameName === 'pictures' ? dataModel.pictures : dataModel.artists;
    quizCategoriesData.map(
      (it, i) =>
        new CategoryItem(
          categoryContainer.node,
          it,
          i,
          {
            onSelect: () => {
              this.onSelect(i);
            },
            onScore: () => {
              this.onScore(+it.name, partQuiz[i]);
            },
          },
          partQuiz
        )
    );
  }
}
