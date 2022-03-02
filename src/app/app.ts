import Control from '../common/control';
import { SettingsPage, SettingsModel } from './settingsPage/settingsPage';
import { StartPage } from './startPage/startPage';
import { GameOverPage } from './gameOverPage/gameOverPage';
import { GameFieldPage } from './gameFieldPage/gameFieldPage';
import { CategoriesPage } from './categoriesPage/index';
import { QuizDataModel } from './quizDataModel/quizDataModel';
import { IPicturesQuestionData, IArtistsQuestionData, IQuizData, IQuizResults } from './interfaces';
import { soundManager } from './soundManager/soundManager';
import { ArtistsQuestionView } from './artistsQuestionView/index';
import { PicturesQuestionView } from './picturesQuestionView/picturesQuestionView';
import { DataModel } from './dataModel/dataModel';
import { ScorePage } from './scorePage/scorePage';
import './app.scss';

export class App extends Control {
  model: QuizDataModel;

  settingsModel: SettingsModel;

  main: Control<HTMLElement>;

  footer: Control<HTMLElement>;

  dataModel: DataModel;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'global_wrapper');

    this.main = new Control(this.node, 'div', 'global_main');

    this.footer = new Control(this.node, 'div', 'global_footer');
    new Control(this.footer.node, 'div', '', '© 2021');

    const gitHubLink = document.createElement('a');
    gitHubLink.href = 'https://github.com/Nick1091';
    gitHubLink.target = '_blank';
    gitHubLink.textContent = 'NIKOLAI KUKHARCHUK';
    this.footer.node.append(gitHubLink);

    const rsLink = document.createElement('a');
    rsLink.href = 'https://rs.school/js/';
    rsLink.target = '_blank';
    rsLink.className = 'footer_rs';
    this.footer.node.append(rsLink);

    const preloader = new Control(this.main.node, 'div', 'loading...');
    soundManager.preload();
    this.settingsModel = new SettingsModel();
    this.settingsModel.loadFromStorage();

    this.dataModel = new DataModel();
    this.dataModel.loadFromStorage();

    this.model = new QuizDataModel();
    this.model.build().then(() => {
      preloader.destroy();
      this.mainCycle();
    });
  }

  private gameCycle(gameName: string, categoryIndex: number) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let questions: Array<any> = [];
    if (gameName === 'artists') {
      questions = this.model.getArtistsQuestions(categoryIndex);
    } else if (gameName === 'pictures') {
      questions = this.model.getPicturesQuestions(categoryIndex);
    } else {
      throw new Error('error');
    }

    let gameField: GameFieldPage<unknown>;
    if (gameName === 'artists') {
      gameField = new GameFieldPage<IArtistsQuestionData>(
        this.main.node,
        ArtistsQuestionView,
        {
          gameName,
          categoryIndex,
          settings: this.settingsModel.getData(),
          dataModel: this.dataModel.getData(),
        },
        questions
      );
    } else if (gameName === 'pictures') {
      gameField = new GameFieldPage<IPicturesQuestionData>(
        this.main.node,
        PicturesQuestionView,
        {
          gameName,
          categoryIndex,
          settings: this.settingsModel.getData(),
          dataModel: this.dataModel.getData(),
        },
        questions
      );
    }
    gameField.animateIN();
    gameField.onHome = () => {
      gameField.animateOut().then(() => {
        gameField.destroy();
        this.mainCycle();
      });
    };
    gameField.onBack = () => {
      gameField.animateOut().then(() => {
        gameField.destroy();
        this.categoryCycle(gameName, this.dataModel.getData());
      });
    };
    gameField.onFinish = (result, dataModel) => {
      gameField.animateOut().then(() => {
        this.dataModel.setData(dataModel);
        gameField.destroy();
        const gameOverPage = new GameOverPage(this.main.node, result);
        gameOverPage.animateIN();
        gameOverPage.onHome = () => {
          gameOverPage.animateOut().then(() => {
            gameOverPage.destroy();
            this.mainCycle();
          });
        };
        gameOverPage.onNext = () => {
          gameOverPage.animateOut().then(() => {
            gameOverPage.destroy();
            gameOverPage.destroy();
            this.gameCycle(gameName, categoryIndex + 1);
          });
        };
      });
    };
  }

  private scoreCycle(index: number, score: IQuizResults, gameName: string) {
    const scorePage = new ScorePage(this.main.node, index, score, this.model.data);
    scorePage.animateIN();
    scorePage.onBack = () => {
      scorePage.animateOut().then(() => {
        scorePage.destroy();
        this.categoryCycle(gameName, this.dataModel.getData());
      });
    };
  }

  private categoryCycle(gameName: string, dataModel: IQuizData) {
    const categories = new CategoriesPage(this.main.node, gameName, this.model.getCategoriesData(gameName), dataModel);
    categories.animateIN();
    categories.onBack = () => {
      categories.animateOut().then(() => {
        categories.destroy();
        this.mainCycle();
      });
    };
    categories.onSelect = (index) => {
      categories.animateOut().then(() => {
        categories.destroy();
        this.gameCycle(gameName, index);
      });
    };
    categories.onScore = (index, score) => {
      categories.animateOut().then(() => {
        categories.destroy();
        this.scoreCycle(index, score, gameName);
      });
    };
  }

  private mainCycle() {
    const startPage = new StartPage(this.main.node);
    startPage.animateIN();
    startPage.onGameSelect = (gameName) => {
      startPage.animateOut().then(() => {
        startPage.destroy();
        this.categoryCycle(gameName, this.dataModel.getData());
      });
    };
    startPage.onSettings = () => {
      startPage
        .animateOut()
        .then(() => {
          startPage.destroy();
        })
        .then(() => {
          const settingsPage = new SettingsPage(this.main.node, this.settingsModel.getData());
          settingsPage.animateIN();
          settingsPage.onBack = () => {
            settingsPage.animateOut().then(() => {
              settingsPage.destroy();
              this.mainCycle();
            });
          };

          settingsPage.onSave = (settings) => {
            settingsPage.animateOut().then(() => {
              settingsPage.destroy();
              this.settingsModel.setData(settings);
              this.mainCycle();
            });
          };
        });
    };
  }
}
