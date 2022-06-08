import { IData } from '../../types/index';
import { IObj } from '../../types/index';
import Filter from './filterProperty';
import { getStorage } from '../getLocalStorage/index';

let year: number[] = [1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

let count: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let isBooleanSort = false;

isBooleanSort = getStorage('isBooleanSort') ? getStorage('isBooleanSort') : isBooleanSort;

export function getIsBooleanSort(select: HTMLSelectElement) {
  isBooleanSort = true;
  localStorage.setItem('SortData', JSON.stringify(select.value));
  localStorage.setItem('isBooleanSort', JSON.stringify(isBooleanSort));
}

export const getSortData = function getSortData(arr: IData[]) {
  const select = document.querySelector('.sort-select');
  if (!(select instanceof HTMLSelectElement)) {
    throw new Error(".sort-select. The teg isn't select");
  }
  switch (select.value) {
    case 'sort-name-max':
      arr.sort((a, b) => (a.name > b.name ? 1 : -1));
      break;
    case 'sort-name-min':
      arr.sort((a, b) => (a.name < b.name ? 1 : -1));
      break;
    case 'sort-year-max':
      arr.sort((a, b) => (+a.year > +b.year ? 1 : -1));
      break;
    case 'sort-year-min':
      arr.sort((a, b) => (+a.year < +b.year ? 1 : -1));
      break;
  }
  return arr;
};

export function getFilterPage(arr: IData[], ObjectFlag: IObj): IData[] {
  const arrayFiltered = new Filter(arr, ObjectFlag);
  const arrayFilterProp = arrayFiltered.getFilterProperty();
  const arraySlid: IData[] = [];
  arrayFilterProp.forEach((item) => {
    for (let i = 0; i < year.length; i++) {
      if (+item.year === year[i]) {
        count.forEach((elem) => {
          if (elem === +item.count) {
            arraySlid.push(item);
          }
        });
      }
    }
  });
  if (isBooleanSort) return getSortData(arraySlid);
  return arraySlid;
}

export function getSortRange(arr: IData[], currentArr: number[], area: string, ObjectFlag: IObj) {
  switch (area) {
    case 'count':
      count = currentArr;
      break;
    case 'year':
      year = currentArr;
      break;
  }
  return getFilterPage(arr, ObjectFlag);
}

export function getFilterSearch(arr: IData[], value: string) {
  const arraySearch = arr.filter((el) => el.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  return arraySearch;
}
