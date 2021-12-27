export function getTreesStart() {
  const greenTree = document.querySelectorAll('.green-tree') as NodeListOf<HTMLElement>;
  const mainTree = document.querySelector('.main-tree') as HTMLImageElement;
  let isTree = '1';
  if (localStorage.getItem('isTree')) {
    isTree = JSON.parse(localStorage.getItem('isTree') as string);
  }
  mainTree.src = `./assets/tree/-${isTree}.png`;
  greenTree.forEach((el) => {
    el.addEventListener('click', (e) => {
      console.log(e.currentTarget);
      mainTree.src = `./assets/tree/-${el.dataset.tree}.png`;
      isTree = el.dataset.tree as string;
      localStorage.setItem('isTree', JSON.stringify(isTree));
    });
  });
}
