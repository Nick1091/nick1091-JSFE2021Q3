import { IData } from './types/types';
import { Shape } from './types/types';

export default class Filter {
  arr = [] as IData[];

  isShape: Shape;

  array = [] as IData[];

  nodeList: NodeListOf<HTMLElement>;

  element: HTMLElement;

  constructor(arr: IData[], isShape: Shape, nodeList: NodeListOf<HTMLElement>, element: HTMLElement) {
    this.arr = arr;
    this.isShape = isShape;
    this.nodeList = nodeList;
    this.element = element;
  }

  getShape(): IData[] {
    if (this.isShape[`${this.element.dataset.filter}`] === true) {
      this.isShape[`${this.element.dataset.filter}`] = false;
    } else this.isShape[`${this.element.dataset.filter}`] = true;
    this.arr.forEach((el) => {
      this.nodeList.forEach((elem) => {
        if (this.isShape[`${elem.dataset.filter}`] === true) {
          if (elem.dataset.filter === el.shape) {
            this.array.push(el);
          }
        }
      });
    });
    return [...new Set(this.array)];
  }

  getColor(): IData[] {
    if (this.isShape[`${this.element.dataset.filter}`] === true) {
      this.isShape[`${this.element.dataset.filter}`] = false;
    } else this.isShape[`${this.element.dataset.filter}`] = true;
    this.arr.forEach((el) => {
      this.nodeList.forEach((elem) => {
        if (this.isShape[`${elem.dataset.filter}`] === true) {
          if (elem.dataset.filter === el.color) {
            this.array.push(el);
          }
        }
      });
    });
    return [...new Set(this.array)];
  }

  getSize(): IData[] {
    if (this.isShape[`${this.element.dataset.filter}`] === true) {
      this.isShape[`${this.element.dataset.filter}`] = false;
    } else this.isShape[`${this.element.dataset.filter}`] = true;
    this.arr.forEach((el) => {
      this.nodeList.forEach((elem) => {
        if (this.isShape[`${elem.dataset.filter}`] === true) {
          if (elem.dataset.filter === el.size) {
            this.array.push(el);
          }
        }
      });
    });
    return [...new Set(this.array)];
  }
}
