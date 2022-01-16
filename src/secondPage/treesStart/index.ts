import { getStorage } from '../../firstPage/getLocalStorage/index';
export function getTreesStart() {
  const greenTree: NodeListOf<HTMLElement> = document.querySelectorAll('.green-tree');
  const mainTree = document.querySelector('.main-tree');
  if (!(mainTree instanceof HTMLImageElement)) {
    throw new Error('Error');
  }
  let isTree = '1';

  isTree = getStorage('isTree') ? getStorage('isTree') : isTree;

  mainTree.src = `./assets/tree/-${isTree}.png`;
  greenTree.forEach((el) => {
    el.addEventListener('click', () => {
      mainTree.src = `./assets/tree/-${el.dataset.tree}.png`;
      isTree = el.dataset.tree !== undefined ? el.dataset.tree : isTree;
      localStorage.setItem('isTree', JSON.stringify(isTree));
    });
  });
}
