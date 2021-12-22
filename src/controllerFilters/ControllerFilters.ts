import { target } from '../nouislider';
import Loader from '../loader/loader';
import SliderRender from '../slider/slidersRender';
import FilterFirst from '../filters/changeObject';
import { IData } from '../types/types';
import { getSortRange, getFilterPage, getSortData, getFilterSearch } from '../filters/otherFilter';
import { renderPage, ShowPopup } from '../renderCard/renderCard';
import { resetFilters } from '../reset/reset';
import { ObjectFlag } from './variables/object';

class CardRender {
  async getCard() {
    const checkbox = document.querySelector('.favorite__input') as HTMLInputElement;
    const outputs = document.querySelectorAll('.toys-output') as NodeListOf<HTMLOutputElement>;
    const sliderCount = document.querySelector('.count-slider') as target;
    const sliderYears = document.querySelector('.year-slider') as target;
    const search = document.querySelector('.search') as HTMLInputElement;
    const select = document.querySelector('.sort-select') as HTMLSelectElement;

    const sliderRender = new SliderRender();
    sliderRender.slidersRenderCount();
    sliderRender.slidersRenderYears();

    const loader = new Loader();
    const list = await loader.getToyList();

    let isCountSort = true;
    let filterers: IData[] = [];
    const filtersData = list;
    let isSearch = false;

    if (localStorage.getItem('isCountSort')) {
      isCountSort = JSON.parse(localStorage.getItem('isCountSort') as string);
    }
    if (localStorage.getItem('flagSearch')) {
      isSearch = JSON.parse(localStorage.getItem('flagSearch') as string);
    }
    if (localStorage.getItem('SortData')) {
      select.value = JSON.parse(localStorage.getItem('SortData') as string);
    }
    if (localStorage.getItem('SortSearch')) {
      search.value = JSON.parse(localStorage.getItem('SortSearch') as string);
    }

    //render card
    function loadRender(arr: IData[]) {
      let render = getFilterPage(isSearch ? getFilterSearch(filtersData, search.value) : arr, ObjectFlag);
      if (isCountSort !== false) render = getSortData(render);
      renderPage(render);
      if (render.length === 0) ShowPopup('Извините, совпадений не обнаружено');
    }
    loadRender(filtersData);

    // filter form, color, favorite
    const elementList = document.querySelectorAll(
      '.filters-meaning button, .favorite__input'
    ) as NodeListOf<HTMLElement>;

    function objFilter(element: HTMLElement): IData[] {
      const filter = new FilterFirst(filtersData, elementList, element, ObjectFlag);
      filter.getObjFilters();
      filterers = filter.getFilterProperty();
      return filterers;
    }
    elementList.forEach((element) => {
      element.addEventListener('click', () => {
        filterers = objFilter(element);
        loadRender(filterers);
      });
    });

    //filter range slider
    const arrayCount: number[] = [];
    const arrayYears: number[] = [];

    sliderCount.noUiSlider.on('update', (values) => {
      arrayCount.length = 0;
      const a = values.map((item) => (+item).toFixed(0));
      for (let i = +a[0]; i <= +a[1]; i++) {
        arrayCount.push(i);
      }
      filterers = getSortRange(filtersData, arrayCount, 'count', ObjectFlag);

      loadRender(filterers);
    });
    sliderYears.noUiSlider.on('update', (values) => {
      arrayYears.length = 0;
      const a = values.map((item) => (+item).toFixed(0));
      for (let i = +a[0]; i <= +a[1]; ) {
        arrayYears.push(i);
        i += 10;
      }
      filterers = getSortRange(filtersData, arrayYears, 'year', ObjectFlag);
      loadRender(filterers);
    });

    //sort selected
    select.addEventListener('input', () => {
      isCountSort = true;
      localStorage.setItem('SortData', JSON.stringify(select.value));
      localStorage.setItem('isCountSort', JSON.stringify(isCountSort));
      filterers = getFilterPage(filtersData, ObjectFlag);
      filterers = getSortData(filterers);
      loadRender(filterers);
    });

    //sort search
    search.addEventListener('change', () => {
      localStorage.setItem('SortSearch', JSON.stringify(search.value));
      localStorage.setItem('flagSearch', JSON.stringify(isSearch));
      if (search.value.length > 0) isSearch = true;
      loadRender(getFilterSearch(filtersData, search.value));
    });

    // reset
    const reset = document.querySelector('.reset');
    reset?.addEventListener('click', () => {
      isSearch = false;
      resetFilters(ObjectFlag, elementList, search, checkbox);
      sliderCount.noUiSlider?.set([1, 12]);
      sliderYears.noUiSlider?.set([1940, 2020]);
      (outputs[0] as HTMLOutputElement).innerHTML = '1';
      (outputs[1] as HTMLOutputElement).innerHTML = '12';
      (outputs[2] as HTMLOutputElement).innerHTML = '1940';
      (outputs[3] as HTMLOutputElement).innerHTML = '2020';
      loadRender(filtersData);
    });
    //clear storage
    document.querySelector('.resetSettings')?.addEventListener('click', () => {
      localStorage.clear();
    });
  }
}

export default CardRender;
