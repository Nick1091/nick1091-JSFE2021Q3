import _default, { target } from '../node_modules/nouislider/dist/nouislider';
import { IData } from './types/types';

export default class Slider {
  noUiSlider = _default;

  // array: IData[];

  // constructor(array: IData[]) {
  //   this.array = array;
  // }

  slidersCount() {
    const sliderCount = document.querySelector('.count-slider') as target;
    const outputs = document.querySelectorAll('.toys-output') as NodeListOf<HTMLOutputElement>;

    this.noUiSlider.create(sliderCount, {
      start: [1, 12],
      connect: true,
      range: {
        min: 1,
        max: 12,
      },
      step: 1,
    });

    let arr = [] as number[];

    sliderCount.noUiSlider.on('update', (values, handle) => {
      arr.length = 0;
      (outputs[handle] as HTMLOutputElement).innerHTML = `${(+values[handle]).toFixed(0)}`;
      const a = values.map((item) => (+item).toFixed(0)) as string[];
      let item = +a[0] as number;
      while (item <= +a[1]) {
        arr.push(item);
        item += 1;
      }
      arr = [...new Set(arr)];
      return arr;
    });
  }

  slidersYears() {
    const sliderYears = document.querySelector('.year-slider') as target;
    const outputs = document.querySelectorAll('.toys-output') as NodeListOf<HTMLOutputElement>;

    this.noUiSlider.create(sliderYears, {
      start: [1940, 2020],
      connect: true,
      range: {
        min: 1940,
        max: 2020,
      },
      step: 10,
    });

    let arr = [] as number[];
    sliderYears.noUiSlider.on('update', (values, handle) => {
      arr.length = 0;
      (outputs[handle + 2] as HTMLOutputElement).innerHTML = `${(+values[handle]).toFixed(0)}`;
      const a = values.map((item) => (+item).toFixed(0)) as string[];
      let item = +a[0] as number;
      while (item <= +a[1]) {
        arr.push(item);
        item += 10;
      }
      arr = [...new Set(arr)];
      return arr;
    });
  }
}
