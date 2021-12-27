export function getBgImages() {
  let isBgNumber = '1';
  const treeContainer = document.querySelector('.tree-container') as HTMLElement;
  const bgItems = document.querySelectorAll('.bg-items') as NodeListOf<HTMLElement>;
  if (localStorage.getItem('isBgNumber')) {
    isBgNumber = JSON.parse(localStorage.getItem('isBgNumber') as string);
  }
  treeContainer.style.backgroundImage = `url(../../assets/bg/${isBgNumber}.jpg)`;
  bgItems.forEach((it) => {
    it.addEventListener('click', (e) => {
      e.stopPropagation();
      treeContainer.style.backgroundImage = `url(../../assets/bg/${(e.target as HTMLElement).dataset.bg}.jpg)`;
      isBgNumber = (e.target as HTMLElement).dataset.bg as string;
      localStorage.setItem('isBgNumber', JSON.stringify(isBgNumber));
    });
  });
}
