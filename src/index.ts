import PageMain from './mainPage/index';
import PageFirst from './toysPage/render/index';
import PageSecond from './treePage/render/index';
import CardRender from './toysPage/controllerFilters/index';
import TreeRender from './treePage/treeRender/index';
import { getStorage } from './toysPage/getLocalStorage/index';
import './style/style.scss';

const buttonTree = document.querySelector('.page-main');
if (!(buttonTree instanceof HTMLAnchorElement)) {
  throw new Error('Error');
}
const buttonPageFirst = document.querySelector('.page-first');
if (!(buttonPageFirst instanceof HTMLAnchorElement)) {
  throw new Error('Error');
}
const buttonPageSecond = document.querySelector('.page-second');
if (!(buttonPageSecond instanceof HTMLAnchorElement)) {
  throw new Error('Error');
}
function choicePage() {
  let app = new PageMain();
  let count = 0;

  function rendersCard() {
    const card = new CardRender();
    card.getCard();
  }
  function rendersTree() {
    const card = new TreeRender();
    card.getPageTree();
  }
  function renderMain() {
    count = getStorage('count') ? getStorage('count') : count;
    switch (count) {
      case 0:
        app = new PageMain();
        app.mainRender();
        document.querySelector('.header__controls')?.setAttribute('id', 'hidden');
        break;
      case 1:
        app = new PageFirst();
        app.mainRender();
        document.querySelector('.header__controls')?.removeAttribute('id');
        rendersCard();
        break;
      case 2:
        app = new PageSecond();
        app.mainRender();
        document.querySelector('.header__controls')?.setAttribute('id', 'hidden');
        rendersTree();
        break;
    }
    const startGame = document.querySelector('.first__start-game');
    startGame?.addEventListener('click', () => {
      count = 1;
      localStorage.setItem('count', JSON.stringify(count));
      renderMain();
    });
  }
  const startGame = document.querySelector('.first__start-game');
  startGame?.addEventListener('click', () => {
    count = 1;
    localStorage.setItem('count', JSON.stringify(count));
    renderMain();
  });

  buttonTree?.addEventListener('click', () => {
    count = 0;
    localStorage.setItem('count', JSON.stringify(count));
    renderMain();
  });

  buttonPageFirst?.addEventListener('click', () => {
    count = 1;
    localStorage.setItem('count', JSON.stringify(count));
    renderMain();
  });
  buttonPageSecond?.addEventListener('click', () => {
    count = 2;
    localStorage.setItem('count', JSON.stringify(count));
    renderMain();
  });
  renderMain();
}
choicePage();
