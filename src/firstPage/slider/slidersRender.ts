import _default, { target } from 'nouislider';
const noUiSlider = _default;
import './slider.scss';

export default class SliderRender {
  slidersRenderCount() {
    const sliderCount = document.querySelector('.count-slider') as target;
    const outputs = document.querySelectorAll('.toys-output') as NodeListOf<HTMLOutputElement>;
    let valueCount = [1, 12];

    if (localStorage.getItem('valuesCount')) {
      valueCount = JSON.parse(localStorage.getItem('valuesCount') as string);
    }
    if (sliderCount !== null) {
      noUiSlider?.create(sliderCount, {
        start: valueCount,
        connect: true,
        range: {
          min: 1,
          max: 12,
        },
        step: 1,
      });

      outputs[0].innerHTML = String((+valueCount[0]).toFixed(0));
      outputs[1].innerHTML = String((+valueCount[1]).toFixed(0));

      sliderCount.noUiSlider?.on('change', (values, handle: number) => {
        (outputs[handle] as HTMLOutputElement).innerHTML = `${(+values[handle]).toFixed(0)}`;
        localStorage.setItem('valuesCount', JSON.stringify(sliderCount.noUiSlider.get()));
      });
    }
  }

  slidersRenderYears() {
    const sliderYears = document.querySelector('.year-slider') as target;
    const outputs = document.querySelectorAll('.toys-output') as NodeListOf<HTMLOutputElement>;
    let valueYear = [1940, 2020];

    if (localStorage.getItem('valuesYear')) {
      valueYear = JSON.parse(localStorage.getItem('valuesYear') as string);
    }
    if (sliderYears !== null) {
      noUiSlider?.create(sliderYears, {
        start: valueYear,
        connect: true,
        range: {
          min: 1940,
          max: 2020,
        },
        step: 10,
      });

      outputs[2].innerHTML = String((+valueYear[0]).toFixed(0));
      outputs[3].innerHTML = String((+valueYear[1]).toFixed(0));

      sliderYears.noUiSlider?.on('change', (values, handle: number) => {
        (outputs[handle + 2] as HTMLOutputElement).innerHTML = `${(+values[handle]).toFixed(0)}`;
        localStorage.setItem('valuesYear', JSON.stringify(sliderYears.noUiSlider.get()));
      });
    }
  }
}
