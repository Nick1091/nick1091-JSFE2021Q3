import { IData } from '../types/types';
import { IObj } from '../types/types';
import Filter from './filterProperty';

let year: number[] = [1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

let count: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function getFilterPage(arr: IData[], ObjectFlag: IObj) {
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
  return arraySlid;
}

export function getSortRange(arr: IData[], currentArr: number[], area: string, ObjectFlag: IObj) {
  if (area === 'count') {
    count = currentArr;
  }
  if (area === 'year') {
    year = currentArr;
  }
  return getFilterPage(arr, ObjectFlag);
}

export const getSortData = function getSortData(arr: IData[]) {
  const select = document.querySelector('.sort-select') as HTMLSelectElement;
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

export function getFilterSearch(arr: IData[], value: string) {
  const arraySearch = arr.filter((el) => el.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  return arraySearch;
}
