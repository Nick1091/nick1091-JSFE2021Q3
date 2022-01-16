import { IData } from '../../types/index';
import Filter from './filterProperty';
import { IObj } from '../../types/index';

export default class FilterFirst extends Filter {
  array: IData[] = [];

  nodeList: NodeListOf<HTMLElement>;

  element: HTMLElement;

  constructor(arr: IData[], nodeList: NodeListOf<HTMLElement>, element: HTMLElement, ObjectFlag: IObj) {
    super(arr, ObjectFlag);
    this.nodeList = nodeList;
    this.element = element;
  }

  getObjFilters(): void {
    const el = this.element;
    const dataParent = this.element.parentElement?.dataset.filter;
    if (dataParent === undefined) {
      throw new Error('Error');
    }
    const dataItem = this.element.dataset.filter;
    if (dataItem !== undefined) {
      if (el instanceof HTMLInputElement) {
        if (this.ObjectFlag[dataParent][dataItem] === false) {
          el.checked = true;
          this.ObjectFlag[dataParent][dataItem] = true;
        } else {
          this.ObjectFlag[dataParent][dataItem] = false;
          el.checked = false;
        }
      } else if (this.ObjectFlag[dataParent][dataItem] === true) {
        el.classList.toggle('active');
        this.ObjectFlag[dataParent][dataItem] = false;
      } else {
        this.ObjectFlag[dataParent][dataItem] = true;
        el.classList.toggle('active');
      }
    }
  }
}
