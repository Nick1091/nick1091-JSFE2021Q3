import { target } from '../slider/nouislider';
import Loader from '../../loader/index';
import SliderRender from '../slider/index';
import FilterFirst from '../filters/changeObject';
import { IData } from '../../types/index';
import { getSortRange, getFilterPage, getFilterSearch, getIsBooleanSort } from '../filters/otherFilter';
import { renderPage } from '../renderCard/index';
import { resetFilters } from '../reset/index';
import { ObjectFlag } from './variables/object';
import { getStorage } from '../getLocalStorage/index';

class CardRender {
  async getCard() {
    const checkbox = document.querySelector('.favorite__input');
    if (!(checkbox instanceof HTMLInputElement)) {
      throw new Error('Error');
    }
    const outputs = document.querySelectorAll('.toys-output');
    const sliderCount: target | null = document.querySelector('.count-slider');
    const sliderYears: target | null = document.querySelector('.year-slider');
    const search = document.querySelector('.search');
    if (!(search instanceof HTMLInputElement)) {
      throw new Error('Error');
    }
    const select = document.querySelector('.sort-select');
    if (!(select instanceof HTMLSelectElement)) {
      throw new Error('Error');
    }

    const sliderRender = new SliderRender();
    sliderRender.slidersRenderCount();
    sliderRender.slidersRenderYears();

    const loader = new Loader();
    const list = await loader.getToysList();
    let isSearch = false;

    isSearch = getStorage('flagSearch') ? getStorage('flagSearch') : isSearch;
    select.value = getStorage('SortData') ? getStorage('SortData') : select.value;
    search.value = getStorage('SortSearch') ? getStorage('SortSearch') : search.value;

    function getToysPage(arr: IData[]) {
      if (!(search instanceof HTMLInputElement)) {
        throw new Error('Error');
      }
      const dataListSearch = isSearch ? getFilterSearch(list, search.value) : arr;
      const render = getFilterPage(dataListSearch, ObjectFlag);
      renderPage(render);
    }
    getToysPage(list);

    const elementList: NodeListOf<HTMLElement> = document.querySelectorAll('.filters-meaning button, .favorite__input');

    function objFilter(element: HTMLElement): IData[] {
      const filter = new FilterFirst(list, elementList, element, ObjectFlag);
      filter.getObjFilters();
      return filter.getFilterProperty();
    }
    elementList.forEach((element) => {
      element.addEventListener('click', () => {
        getToysPage(objFilter(element));
      });
    });

    sliderCount?.noUiSlider?.on('change', (values) => {
      const arrayCount: number[] = [];
      for (let i = +values[0]; i <= +values[1]; i++) {
        arrayCount.push(i);
      }
      getToysPage(getSortRange(list, arrayCount, 'count', ObjectFlag));
    });

    sliderYears?.noUiSlider?.on('change', (values) => {
      const arrayYears: number[] = [];
      for (let i = +values[0]; i <= +values[1]; ) {
        arrayYears.push(i);
        i += 10;
      }
      getToysPage(getSortRange(list, arrayYears, 'year', ObjectFlag));
    });

    select.addEventListener('input', () => {
      getIsBooleanSort(select);
      getToysPage(getFilterPage(list, ObjectFlag));
    });

    search.addEventListener('change', () => {
      localStorage.setItem('SortSearch', JSON.stringify(search.value));
      localStorage.setItem('flagSearch', JSON.stringify(isSearch));
      if (search.value.length > 0) isSearch = true;
      getToysPage(getFilterSearch(list, search.value));
    });

    const reset = document.querySelector('.reset');
    reset?.addEventListener('click', () => {
      isSearch = false;
      resetFilters(ObjectFlag, elementList, search, checkbox);
      sliderCount?.noUiSlider?.set([1, 12]);
      sliderYears?.noUiSlider?.set([1940, 2020]);
      outputs[0].innerHTML = '1';
      outputs[1].innerHTML = '12';
      outputs[2].innerHTML = '1940';
      outputs[3].innerHTML = '2020';
      getToysPage(list);
    });

    document.querySelector('.resetSettings')?.addEventListener('click', () => {
      localStorage.clear();
    });
  }
}

export default CardRender;
