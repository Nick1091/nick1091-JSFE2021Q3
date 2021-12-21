import { IData } from './types/types';
import { IObj } from './types/types';
// import { getSortItems } from './otherFilter';

export default class Filter {
  arr: IData[] = [];

  array: IData[] = [];

  ObjectFlag: IObj;

  constructor(arr: IData[], ObjectFlag: IObj) {
    this.arr = arr;
    if (localStorage.getItem('object') || '') {
      ObjectFlag = JSON.parse(localStorage.getItem('object') || '');
    }
    this.ObjectFlag = ObjectFlag;
  }

  getShape() {
    const keys: string[] = Object.keys(this.ObjectFlag);
    for (let i = 0; i < keys.length - 1; i++) {
      const key = Object.keys(this.ObjectFlag[`${keys[i]}`]);
      const ar = document.querySelector(`.${keys[i]}`) as HTMLLIElement;
      for (let j = 0; j < key.length; j++) {
        if (this.ObjectFlag[`${keys[i]}`][`${key[j]}`] == true) {
          ar.querySelectorAll('button')[j].classList.add('active');
        } else ar.querySelectorAll('button')[j].classList.remove('active');
      }
    }
    if (this.ObjectFlag[`${keys[3]}`].favorite == true) {
      (document.querySelector('.favorite__input') as HTMLInputElement).checked = true;
    } else (document.querySelector('.favorite__input') as HTMLInputElement).checked = false;

    if ((document.querySelector(`.${keys[0]}`) as HTMLElement).querySelector('.active') !== null) {
      this.array = [];
      const keyFilter: string[] = Object.keys(this.ObjectFlag[`${keys[0]}`]);
      for (let j = 0; j < keys[0].length; j++) {
        if (this.ObjectFlag[`${keys[0]}`][`${keyFilter[j]}`] == true) {
          this.arr.forEach((el) => {
            if (keyFilter[j] == el[`${keys[0]}`]) {
              this.array.push(el);
            }
          });
        }
      }
      this.arr = this.array;
    }
    if ((document.querySelector(`.${keys[1]}`) as HTMLElement).querySelector('.active') !== null) {
      this.array = [];
      const keyFilter: string[] = Object.keys(this.ObjectFlag[`${keys[1]}`]);
      for (let j = 0; j < keys[1].length; j++) {
        if (this.ObjectFlag[`${keys[1]}`][`${keyFilter[j]}`] == true) {
          this.arr.forEach((el) => {
            if (keyFilter[j] == el[`${keys[1]}`]) {
              this.array.push(el);
            }
          });
        }
      }
      this.arr = this.array;
    }
    if ((document.querySelector(`.${keys[2]}`) as HTMLElement).querySelector('.active') !== null) {
      this.array = [];
      const keyFilter: string[] = Object.keys(this.ObjectFlag[`${keys[2]}`]);
      for (let j = 0; j < keys[2].length; j++) {
        if (this.ObjectFlag[`${keys[2]}`][`${keyFilter[j]}`] == true) {
          this.arr.forEach((el) => {
            if (keyFilter[j] == el[`${keys[2]}`]) {
              this.array.push(el);
            }
          });
        }
      }
      this.arr = this.array;
    }
    if ((document.querySelector('.favorite__input') as HTMLInputElement).checked) {
      this.array = [];
      const keyFilter: string[] = Object.keys(this.ObjectFlag[`${keys[3]}`]);
      this.arr.forEach((el) => {
        const r = el[`${keyFilter[0]}`];
        if ((r as unknown as boolean) == true) {
          this.array.push(el);
        }
      });
      this.arr = this.array;
    }
    localStorage.setItem('object', JSON.stringify(this.ObjectFlag));
    return this.arr;
  }
}
