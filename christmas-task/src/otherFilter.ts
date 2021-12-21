import { IData } from './types/types';
import { IObj } from './types/types';
import Filter from './filter';

let year: number[] = [1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

let count: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const getSortItems = function getSortItems(arr: IData[], currentArr: number[], area: string, ObjectFlag: IObj) {
  const arrayC = new Filter(arr, ObjectFlag);
  // arrayC.getShape();
  const arrayY = arrayC.getShape();
  if (area == 'count') {
    count = currentArr;
  }
  if (area == 'year') {
    year = currentArr;
  }
  const arraySlider: IData[] = [];
  arraySlider.length = 0;
  arrayY.forEach((item) => {
    for (let i = 0; i < year.length; i++) {
      if (+item.year == year[i]) {
        count.forEach((elem) => {
          if (elem == +item.count) {
            arraySlider.push(item);
          }
        });
      }
    }
  });
  return arraySlider;
};

export const getSortPage = function getSortPage(arr: IData[], ObjectFlag: IObj) {
  const arrayC = new Filter(arr, ObjectFlag);
  // arrayC.getShape();
  const arrayY = arrayC.getShape();
  const arraySlid: IData[] = [];
  arrayY.forEach((item) => {
    for (let i = 0; i < year.length; i++) {
      if (+item.year == year[i]) {
        count.forEach((elem) => {
          if (elem == +item.count) {
            arraySlid.push(item);
          }
        });
      }
    }
  });
  return arraySlid;
};

export const getSortPagePage = function getSortPagePage(arr: IData[]) {
  const select = document.querySelector('.sort-select') as HTMLSelectElement;
  if (localStorage.getItem('SortData') || '') {
    select.value = JSON.parse(localStorage.getItem('SortData') || '');
  }
  if (select.value == 'sort-name-max') {
    arr.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  if (select.value == 'sort-name-min') {
    arr.sort((a, b) => (a.name < b.name ? 1 : -1));
  }
  if (select.value == 'sort-count-max') {
    arr.sort((a, b) => (+a.count > +b.count ? 1 : -1));
  }
  if (select.value == 'sort-count-min') {
    arr.sort((a, b) => (+a.count < +b.count ? 1 : -1));
  }

  return arr;
};

export const filterSearch = function filterSearch(arr: IData[], value: string) {
  const arraySearch = arr.filter((el) => {
    if (el.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) return el;
  });
  return arraySearch;
};
