import _default, { target } from 'nouislider';
import './slider.scss';
import { getStorage } from '../getLocalStorage/index';

export default class SliderRender {
  noUiSlider = _default;

  slidersRenderCount() {
    const sliderCount: target | null = document.querySelector('.count-slider');
    const outputs = document.querySelectorAll('.toys-output');
    let valueCount = [1, 12];

    valueCount = getStorage('valuesCount') ? getStorage('valuesCount') : valueCount;

    if (sliderCount !== null) {
      this.noUiSlider.create(sliderCount, {
        start: valueCount,
        connect: true,
        range: {
          min: 1,
          max: 12,
        },
        step: 1,
      });

      outputs[0].innerHTML = `${(+valueCount[0]).toFixed(0)}`;
      outputs[1].innerHTML = `${(+valueCount[1]).toFixed(0)}`;

      sliderCount.noUiSlider?.on('change', (values, handle: number) => {
        outputs[handle].innerHTML = `${(+values[handle]).toFixed(0)}`;
        localStorage.setItem('valuesCount', JSON.stringify(sliderCount.noUiSlider.get()));
      });
    }
  }

  slidersRenderYears() {
    const sliderYears: target | null = document.querySelector('.year-slider');
    const outputs = document.querySelectorAll('.toys-output');
    let valueYear = [1940, 2020];

    valueYear = getStorage('valuesYear') ? getStorage('valuesYear') : valueYear;

    if (sliderYears !== null) {
      this.noUiSlider.create(sliderYears, {
        start: valueYear,
        connect: true,
        range: {
          min: 1940,
          max: 2020,
        },
        step: 10,
      });

      outputs[2].innerHTML = `${(+valueYear[0]).toFixed(0)}`;
      outputs[3].innerHTML = `${(+valueYear[1]).toFixed(0)}`;

      sliderYears.noUiSlider?.on('change', (values, handle: number) => {
        outputs[handle + 2].innerHTML = `${(+values[handle]).toFixed(0)}`;
        localStorage.setItem('valuesYear', JSON.stringify(sliderYears.noUiSlider.get()));
      });
    }
  }
}
