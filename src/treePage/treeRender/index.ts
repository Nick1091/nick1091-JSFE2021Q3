import { getStorage } from '../../toysPage/getLocalStorage/index';
import { audioPlay } from '../audioPlay/index';
import { IData } from '../../types/index';
import Loader from '../../loader/index';
import { getSnowInterval } from '../snowDown/index';
import { getTreesStart } from '../treesStart/index';
import { getBgImages } from '../bgStart/index';
import { handleDraggle } from './handleDraggle/index';
import { getGarland } from './getGarland/index';
import { addToysPage } from './renderToysArray/index';
import './treeRender.scss';

class TreeRender {
  async getPageTree() {
    audioPlay();

    let isSnow = false;
    const snowControl = document.querySelector('.snow-setting');
    if (!(snowControl instanceof HTMLElement)) {
      throw new Error('Error');
    }
    isSnow = getStorage('isSnow') ? getStorage('isSnow') : isSnow;

    if (isSnow === true) {
      snowControl.classList.add('active');
      getSnowInterval();
    }
    localStorage.setItem('isSnow', JSON.stringify(isSnow));
    snowControl.addEventListener('click', () => {
      snowControl.classList.toggle('active');
      isSnow = snowControl.classList.contains('active') ? true : false;
      localStorage.setItem('isSnow', JSON.stringify(isSnow));
      getSnowInterval();
    });
    document.querySelector('.storage-setting')?.addEventListener('click', () => {
      localStorage.clear();
    });

    getTreesStart();

    getBgImages();

    getGarland();

    const loader = new Loader();
    const list = await loader.getToysList();

    const arrayToys: IData[] = getStorage('toysToTree')
      ? getStorage('toysToTree').length > 0
        ? getStorage('toysToTree')
        : list.slice(0, 20)
      : list.slice(0, 20);

    const currentArr = (() => {
      if (getStorage('arrayFavorite') && getStorage('arrayFavorite').length > 0) {
        const arr = getStorage('arrayFavorite') as IData[];
        return arrayToys.filter((item) => arr.find((it) => it.name === item.name));
      } else return arrayToys.slice(0, 20);
    })();

    const containerToysFavorite = document.querySelector('.choice-favorite-toys');
    if (!(containerToysFavorite instanceof HTMLElement)) {
      throw new Error('Error');
    }
    addToysPage(currentArr.length === 0 ? list.slice(0, 20) : currentArr, containerToysFavorite);

    handleDraggle();
  }
}

export default TreeRender;
