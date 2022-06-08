import { getStorage } from '../../toysPage/getLocalStorage/index';
export function getBgImages() {
  let isBgNumber = '1';
  const treeContainer = document.querySelector('.tree-container');
  if (!(treeContainer instanceof HTMLElement)) {
    throw new Error('Error');
  }
  const bgItems = document.querySelectorAll('.bg-items');

  isBgNumber = getStorage('isBgNumber') ? getStorage('isBgNumber') : isBgNumber;

  treeContainer.style.backgroundImage = `url(./assets/bg/${isBgNumber}.jpg)`;
  bgItems.forEach((it) => {
    it.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!(e.target instanceof HTMLElement)) {
        throw new Error('Error');
      }
      const { target } = e;
      treeContainer.style.backgroundImage = `url(./assets/bg/${target.dataset.bg}.jpg)`;
      isBgNumber = target.dataset.bg !== undefined ? target.dataset.bg : isBgNumber;
      localStorage.setItem('isBgNumber', JSON.stringify(isBgNumber));
    });
  });
}
