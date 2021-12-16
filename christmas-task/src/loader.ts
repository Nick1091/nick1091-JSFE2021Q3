import { IData } from './types/types';
const data = ' ./data.json';
class Loader {
  async getToyList() {
    const res = await fetch(data);
    const list: IData[] = await res.json();
    return list;
  }

  // private array: IData[] = [];

  // arr: IData[] = [];

  // element: HTMLElement;

  // count: string;

  // num;

  // name;

  // year;

  // shape;

  // color;

  // size;

  // favorite;

  // constructor(el: IData) {
  //   this.num = el.num;
  //   this.count = el.count;
  //   this.name = el.name;
  //   this.year = el.year;
  //   this.shape = el.shape;
  //   this.color = el.color;
  //   this.size = el.size;
  //   this.favorite = el.favorite;
  //   // this.element = element;
  // }

  // renderCard(): string {
  //   const fragmentCard = `
  //       <div class="card" data-num = "${this.num}">
  //         <h2 class="card__title">${this.name}</h2>
  //         <img src="./assets/toys/${this.num}.png" alt="toy" class="card-img">
  //         <div class="card__info">
  //           <p class="count">Количество: <span>${this.count}</span></p>
  //           <p class="year">Год покупки: <span>${this.year}</span></p>
  //           <p class="form">Форма: <span>${this.shape}</span></p>
  //           <p class="color">Цвет: <span>${this.color}</span></p>
  //           <p class="size">Размер: <span>${this.size}</span></p>
  //           <p class="favorite">Любимая: <span>${this.favorite ? 'да' : 'нет'}</span></p>
  //         </div>
  //         <div class="mark"></div>
  //       </div>`;
  //   return fragmentCard;
  // }
}
export default Loader;
