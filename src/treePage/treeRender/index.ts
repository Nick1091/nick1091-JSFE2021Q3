import { audioPlay } from '../audioPlay/index';
import Loader from '../../loader/index';
import { getSnowInterval } from '../snowDown/index';
import { getTreesStart } from '../treesStart/index';
import { getBgImages } from '../bgStart/index';
import { handleDraggle } from './handleDraggle/index';
import { getGarland } from './getGarland/index';
import { addToysPage } from './renderToysArray/index';
import './treeRender.scss';
import { getStorage } from '../../toysPage/getLocalStorage/index';

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
    let arrayToys = list.slice(0, 20);

    arrayToys = getStorage('arrayFavorite')
      ? getStorage('arrayFavorite').length > 0
        ? getStorage('arrayFavorite')
        : arrayToys
      : arrayToys;

    const containerToysFavorite = document.querySelector('.choice-favorite-toys');
    if (!(containerToysFavorite instanceof HTMLElement)) {
      throw new Error('Error');
    }
    addToysPage(arrayToys, containerToysFavorite);

    handleDraggle();
  }
}

export default TreeRender;
