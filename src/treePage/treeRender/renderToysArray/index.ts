import { IData } from '../../../types/index';
export function addToysPage(arrayToys: IData[], node: HTMLElement) {
  arrayToys.forEach((item, ind) => {
    const choiceToy = document.createElement('div');
    choiceToy.className = 'choice-toy';
    choiceToy.dataset.num = `${ind}`;
    const choiceNumber = document.createElement('p');
    choiceNumber.className = 'choice-number-img';
    choiceNumber.innerText = item.count;
    const result: HTMLElement[] = [];
    for (let i = 0; i < +item.count; i++) {
      const choiceImg = document.createElement('img');
      choiceImg.className = 'choice-img';
      choiceImg.alt = 'toy';
      choiceImg.draggable = true;
      choiceImg.dataset.number = `${ind}`;
      choiceImg.id = `${item.num}-${i}`;
      choiceImg.src = `./assets/toys/${item.num}.png`;
      result.push(choiceImg);
    }
    choiceToy.append(choiceNumber);
    choiceToy.append(...result);
    node?.append(choiceToy);
  });
}
