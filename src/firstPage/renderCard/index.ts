import { IData } from '../../types/index';
import './card.scss';
import './popup.scss';
import { getStorage } from '../getLocalStorage/index';

let popupActive = 0;
export function ShowPopup(text: string) {
  const windowMain = document.querySelector('.main__container');
  if (!(windowMain instanceof HTMLElement)) {
    throw new Error('Error');
  }
  const window = document.querySelector('.main');
  if (!(window instanceof HTMLElement)) {
    throw new Error('Error');
  } else {
    if (popupActive === 0) {
      popupActive = 1;
      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      const popup = document.createElement('div');
      const close = document.createElement('div');
      close.className = 'close';
      popup.className = 'popup';
      popup.innerHTML = text;
      popup.append(close);
      windowMain.append(overlay);
      window.append(popup);
      close.addEventListener('click', () => {
        popup.remove();
        overlay.remove();
        popupActive = 0;
      });
    }
  }
}

let arrayFavorite: IData[] = [];
arrayFavorite = getStorage('arrayFavorite') ? getStorage('arrayFavorite') : arrayFavorite;

function favoriteCheck(item: IData, card: HTMLDivElement) {
  const cardLastChild = card.lastChild;
  if (!(cardLastChild instanceof HTMLElement)) {
    throw new Error('Error');
  }
  if (arrayFavorite.length < 20) {
    if (cardLastChild.classList.contains('active')) {
      cardLastChild.classList.toggle('active');
      arrayFavorite = arrayFavorite.filter((el) => JSON.stringify(el) !== JSON.stringify(item));
    } else {
      arrayFavorite.push(item);
      cardLastChild.classList.toggle('active');
    }
  } else {
    if (cardLastChild.classList.contains('active')) {
      cardLastChild.classList.toggle('active');
      arrayFavorite = arrayFavorite.filter((el) => JSON.stringify(el) !== JSON.stringify(item));
    } else {
      ShowPopup('Извините, все слоты заполнены');
    }
  }
  const selectedItem = document.querySelector('.selected span');
  if (!(selectedItem instanceof HTMLElement)) {
    throw new Error('Error');
  }
  selectedItem.innerHTML = `${arrayFavorite.length}`;
  localStorage.setItem('arrayFavorite', JSON.stringify(arrayFavorite));
}

export function renderPage(arr: IData[]) {
  const cardContainer = document.querySelector('.card__container');
  if (!(cardContainer instanceof HTMLElement)) {
    throw new Error('Error');
  }
  cardContainer.innerHTML = '';
  if (arr.length === 0) {
    ShowPopup('Извините, совпадений не обнаружено');
  } else {
    const selectedItem = document.querySelector('.selected span');
    if (!(selectedItem instanceof HTMLElement)) {
      throw new Error('Error');
    }
    selectedItem.innerHTML = `${arrayFavorite.length}`;
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
      const cardLastChild = card.lastChild;
      if (!(cardLastChild instanceof HTMLElement)) {
        throw new Error('Error');
      }
      arrayFavorite.forEach((el) => {
        if (JSON.stringify(el) === JSON.stringify(item)) {
          cardLastChild.classList.add('active');
        }
      });
      card.addEventListener('click', () => {
        favoriteCheck(item, card);
      });
    });
  }
}
