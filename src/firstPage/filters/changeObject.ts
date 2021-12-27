import { IData } from '../../types/types';
import Filter from './filterProperty';
import { IObj } from '../../types/types';

export default class FilterFirst extends Filter {
  array: IData[] = [];

  nodeList: NodeListOf<HTMLElement>;

  element: HTMLElement;

  constructor(arr: IData[], nodeList: NodeListOf<HTMLElement>, element: HTMLElement, ObjectFlag: IObj) {
    super(arr, ObjectFlag);
    this.nodeList = nodeList;
    this.element = element;
  }

  getObjFilters() {
    const dataParent = (this.element.parentNode as HTMLElement).dataset.filter as string;
    const dataItem = this.element.dataset.filter as string;

    if (this.element.nodeName == 'INPUT') {
      if (this.ObjectFlag[dataParent][dataItem] === false) {
        (this.element as HTMLInputElement).checked = true;
        this.ObjectFlag[dataParent][dataItem] = true;
      } else {
        this.ObjectFlag[dataParent][dataItem] = false;
        (this.element as HTMLInputElement).checked = false;
      }
    } else if (this.ObjectFlag[dataParent][dataItem] === true) {
      this.element.classList.toggle('active');
      this.ObjectFlag[dataParent][dataItem] = false;
    } else {
      this.ObjectFlag[dataParent][dataItem] = true;
      this.element.classList.toggle('active');
    }
  }
}
