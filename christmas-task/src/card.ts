import Loader from './loader';
import FilterFirst from './filtersFirst';
import { IData } from './types/types';
import { target } from '../node_modules/nouislider/dist/nouislider';
import SliderRender from './slidersrender';
import { getSortItems, getSortPage, getSortPagePage, filterSearch } from './otherFilter';
import { renderPage, ShowPopup } from './renderPage';
import { resetFilters } from './reset';

class CardRender {
  async getCard() {
    const elementCheck = document.querySelector('.favorite__input') as HTMLInputElement;
    const outputs = document.querySelectorAll('.toys-output') as NodeListOf<HTMLOutputElement>;
    const sliderCount = document.querySelector('.count-slider') as target;
    const sliderYears = document.querySelector('.year-slider') as target;

    const sliderRender = new SliderRender();
    sliderRender.slidersRenderCount();
    sliderRender.slidersRenderYears();

    const loader = new Loader();
    const list = await loader.getToyList();
    const ObjectFlag = {
      shape: {
        шар: false,
        колокольчик: false,
        шишка: false,
        снежинка: false,
        фигурка: false,
      },
      color: {
        белый: false,
        желтый: false,
        красный: false,
        синий: false,
        зелёный: false,
      },
      size: {
        большой: false,
        средний: false,
        малый: false,
      },
      favorites: {
        favorite: false,
      },
    };
    let countSort = 0;
    let isSearch = false;
    let searching: IData[] = [];
    let filters: IData[] = [];
    const filtersData = list;

    //render card
    function loadRender(arr: IData[]) {
      let render = getSortPage(isSearch ? searching : arr, ObjectFlag);
      if (countSort == 1) render = getSortPagePage(render);
      renderPage(render);
      if (render.length <= 0) ShowPopup('Извините, совпадений не обнаружено');
    }
    loadRender(filtersData);

    // filter form, color, favorite
    const elementList = document.querySelectorAll(
      '.filters-meaning button, .favorite__input'
    ) as NodeListOf<HTMLElement>;

    function objFilter(element: HTMLElement): IData[] {
      const filter = new FilterFirst(filtersData, elementList, element, ObjectFlag);
      filter.getFirstFilters();
      filters = filter.getShape();
      return filters;
    }
    elementList.forEach((element) => {
      element.addEventListener('click', () => {
        filters = objFilter(element);
        loadRender(filters);
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
      filters = getSortItems(filtersData, arrayCount, 'count', ObjectFlag);

      loadRender(filters);
    });
    sliderYears.noUiSlider.on('update', (values) => {
      arrayYears.length = 0;
      const a = values.map((item) => (+item).toFixed(0));
      for (let i = +a[0]; i <= +a[1]; ) {
        arrayYears.push(i);
        i += 10;
      }
      filters = getSortItems(filtersData, arrayYears, 'year', ObjectFlag);
      loadRender(filters);
    });

    //sort selected
    const select = document.querySelector('.sort-select') as HTMLSelectElement;
    select.addEventListener('input', () => {
      localStorage.setItem('SortData', JSON.stringify(select.value));
      countSort = 1;
      filters = getSortPage(filtersData, ObjectFlag);
      filters = getSortPagePage(filters);
      loadRender(filters);
    });

    //sort search
    const search = document.querySelector('.search') as HTMLInputElement;
    window.addEventListener('load', () => {
      if (localStorage.getItem('SortSearch') || '') {
        search.value = JSON.parse(localStorage.getItem('SortSearch') || '');
      }
      if (localStorage.getItem('flagSearch') || '') {
        isSearch = JSON.parse(localStorage.getItem('flagSearch') || '');
      }
    });
    search.addEventListener('focus', () => {
      search.style.backgroundSize = '0';
    });
    search.addEventListener('blur', () => {
      search.style.backgroundSize = '20px';
    });
    search.addEventListener('input', () => {
      localStorage.setItem('SortSearch', JSON.stringify(search.value));
      localStorage.setItem('flagSearch', JSON.stringify(isSearch));
      if (search.value.length > 0) isSearch = true;
      searching = filterSearch(filtersData, search.value);
      loadRender(searching);
    });

    // reset
    const reset = document.querySelector('.reset');
    reset?.addEventListener('click', () => {
      isSearch = false;
      resetFilters(ObjectFlag, elementList, search, elementCheck);
      sliderCount.noUiSlider.set([1, 12]);
      sliderYears.noUiSlider.set([1940, 2020]);
      (outputs[0] as HTMLOutputElement).innerHTML = '1';
      (outputs[1] as HTMLOutputElement).innerHTML = '12';
      (outputs[2] as HTMLOutputElement).innerHTML = '1940';
      (outputs[3] as HTMLOutputElement).innerHTML = '2020';
      loadRender(filtersData);
    });
    //clear storage
    document.querySelector('.resetSettings')?.addEventListener('click', () => {
      console.log('ashed');
      localStorage.clear();
    });
  }
}

export default CardRender;
