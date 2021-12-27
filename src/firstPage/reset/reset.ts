import { IObj } from '../../types/types';

export function resetFilters(
  obj: IObj,
  collection: NodeListOf<HTMLElement>,
  search: HTMLInputElement,
  elementCheck: HTMLInputElement
) {
  for (const keys in obj) {
    for (const key in obj[keys]) {
      obj[keys][key] = false;
    }
  }
  localStorage.setItem('object', JSON.stringify(obj));
  collection.forEach((el) => {
    el.classList.remove('active');
  });
  elementCheck.checked = false;
  search.value = '';
}
