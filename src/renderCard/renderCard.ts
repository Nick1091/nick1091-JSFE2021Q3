import { IData } from '../types/types';
import './card.scss';
import './popup.scss';

let popupActive = 0;
export function ShowPopup(text: string) {
  if (popupActive === 0) {
    popupActive = 1;
    const overlay = document.createElement('div') as HTMLElement;
    overlay.className = 'overlay';
    const popup = document.createElement('div') as HTMLElement;
    const close = document.createElement('div') as HTMLElement;
    close.className = 'close';
    popup.className = 'popup';
    popup.innerHTML = text;
    const window = document.querySelector('.main') as HTMLElement;
    popup.append(close);
    window.append(overlay);
    window.append(popup);
    close.addEventListener('click', () => {
      popup.remove();
      overlay.remove();
      popupActive = 0;
    });
  }
}

let arrayFavorite: IData[] = [];
if (localStorage.getItem('arrayFavorite')) {
  arrayFavorite = JSON.parse(localStorage.getItem('arrayFavorite') as string);
}
console.log(arrayFavorite.length);

function favoriteCheck(item: IData, card: HTMLDivElement) {
  if (arrayFavorite.length < 20) {
    if ((card.lastChild as HTMLElement).classList.contains('active')) {
      (card.lastChild as HTMLElement).classList.toggle('active');
      arrayFavorite = arrayFavorite.filter((el) => JSON.stringify(el) !== JSON.stringify(item));
    } else {
      arrayFavorite.push(item);
      (card.lastChild as HTMLElement).classList.toggle('active');
    }
  } else {
    if ((card.lastChild as HTMLElement).classList.contains('active')) {
      (card.lastChild as HTMLElement).classList.toggle('active');
      arrayFavorite = arrayFavorite.filter((el) => JSON.stringify(el) !== JSON.stringify(item));
    } else {
      ShowPopup('Извините, все слоты заполнены');
    }
  }
  (document.querySelector('.selected span') as HTMLElement).innerHTML = `${arrayFavorite.length}`;
  // console.log(arrayFavorite.length);
  localStorage.setItem('arrayFavorite', JSON.stringify(arrayFavorite));
}

export function renderPage(arr: IData[]) {
  const cardContainer = document.querySelector('.card__container') as HTMLTemplateElement;
  cardContainer.innerHTML = '';
  (document.querySelector('.selected span') as HTMLElement).innerHTML = `${arrayFavorite.length}`;
  arr.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.num = item.num;
    card.innerHTML = `
    <h2 class="card__title">${item.name}</h2>
    <img src="./assets/toys/${item.num}.png" alt="toy" class="card-img">
    <div class="card__info">
      <p class="count">Количество: <span>${item.count}</span></p>
      <p class="year">Год покупки: <span>${item.year}</span></p>
      <p class="form">Форма: <span>${item.shape}</span></p>
      <p class="color">Цвет: <span>${item.color}</span></p>
      <p class="size">Размер: <span>${item.size}</span></p>
      <p class="favorite">Любимая: <span>${item.favorite ? 'да' : 'нет'}</span></p>
    </div>
    <div class="mark"></div>`;
    cardContainer.append(card);
    arrayFavorite.forEach((el) => {
      if (JSON.stringify(el) === JSON.stringify(item)) {
        (card.lastChild as HTMLElement).classList.add('active');
      }
    });
    card.addEventListener('click', () => {
      favoriteCheck(item, card);
    });
  });
}
