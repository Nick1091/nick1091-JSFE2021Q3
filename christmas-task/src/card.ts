import Loader from './loader';
import Filter from './filter';
import { IData } from './types/types';
import { Shape } from './types/types';
import Slider from './slider';
import SliderRange from './range';

class CardRender {
  async getCard() {
    const loader = new Loader();
    const list = await loader.getToyList();
    const cardContainer = document.querySelector('.card__container') as HTMLTemplateElement;
    cardContainer.innerHTML = '';
    list.forEach((item) => {
      const fragmentCard = `
        <div class="card" data-num = "${item.num}">
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
          <div class="mark"></div>
        </div>`;
      cardContainer.innerHTML += fragmentCard;
    });
    const elementShape = document.querySelectorAll('.shape button') as NodeListOf<HTMLElement>;
    let arrShape = [] as IData[];
    const elShape: Shape = {
      шар: false,
      колокольчик: false,
      шишка: false,
      снежинка: false,
      фигурка: false,
    };
    elementShape.forEach((element) => {
      element.addEventListener('click', () => {
        const filter = new Filter(list, elShape, elementShape, element);
        arrShape = [...filter.getShape()];
        console.log(arrShape);
      });
    });
    const elementColor = document.querySelectorAll('.color button') as NodeListOf<HTMLElement>;
    let arrColor = [] as IData[];
    const elColor: Shape = {
      белый: false,
      желтый: false,
      красный: false,
      синий: false,
      зелёный: false,
    };
    elementColor.forEach((element) => {
      element.addEventListener('click', () => {
        const filter = new Filter(list, elColor, elementColor, element);
        arrColor = [...filter.getColor()];
        console.log(arrColor);
      });
    });
    const elementSize = document.querySelectorAll('.size button') as NodeListOf<HTMLElement>;
    let arrSize = [] as IData[];
    const elSize: Shape = {
      большой: false,
      средний: false,
      малый: false,
    };
    elementSize.forEach((element) => {
      element.addEventListener('click', () => {
        const filter = new Filter(list, elSize, elementSize, element);
        arrSize = [...filter.getSize()];
        console.log(arrSize);
      });
    });
    const elementFavorite = document.querySelector('.favorite__input') as HTMLInputElement;
    const arrFavorite = [] as IData[];
    elementFavorite.addEventListener('click', () => {
      if (elementFavorite.checked) {
        list.filter((item) => {
          if (item.favorite === true) {
            arrFavorite.push(item);
          }
        });
        console.log([...new Set(arrFavorite)]);
      }
    });

    const slider = new Slider();
    const counArray = slider.slidersCount();
    const yearsArray = slider.slidersYears();
  }
}

export default CardRender;
