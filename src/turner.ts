import PageMain from './mainPage/render/render';
import PageFirst from './firstPage/render/render';
import PageSecond from './secondPage/render/render';
import CardRender from './firstPage/controllerFilters/ControllerFilters';
import TreeRender from './secondPage/treeRender/treeRender';
const buttonTree = document.querySelector('.page-main') as HTMLElement;
const buttonPageFirst = document.querySelector('.page-first') as HTMLElement;
const buttonPageSecond = document.querySelector('.page-second') as HTMLElement;
export default function choicePage() {
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
    if (localStorage.getItem('count')) {
      count = JSON.parse(localStorage.getItem('count') as string);
    }
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
    const startGame = document.querySelector('.first__start-game') as HTMLElement;
    startGame?.addEventListener('click', () => {
      count = 1;
      localStorage.setItem('count', JSON.stringify(count));
      renderMain();
    });
  }
  const startGame = document.querySelector('.first__start-game') as HTMLElement;
  startGame?.addEventListener('click', () => {
    count = 1;
    localStorage.setItem('count', JSON.stringify(count));
    renderMain();
  });

  buttonTree.addEventListener('click', () => {
    count = 0;
    localStorage.setItem('count', JSON.stringify(count));
    renderMain();
  });

  buttonPageFirst.addEventListener('click', () => {
    count = 1;
    localStorage.setItem('count', JSON.stringify(count));
    renderMain();
  });
  buttonPageSecond.addEventListener('click', () => {
    count = 2;
    localStorage.setItem('count', JSON.stringify(count));
    renderMain();
  });
  renderMain();
}
