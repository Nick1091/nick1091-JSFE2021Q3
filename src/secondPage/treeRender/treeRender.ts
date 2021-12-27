import { audioPlay } from '../audioPlay/audioPlay';
import Loader from '../../loader/loader';
import { getSnowInterval } from '../snowDown/snowDown';
import { getTreesStart } from '../treesStart/treesStart';
import { getBgImages } from '../bgStart/bgStart';
import { handleDraggle } from './handleDraggle/handleDraggle';
import { getGarland } from './getGarland/getGarland';
import './treeRender.scss';

class TreeRender {
  async getPageTree() {
    //play audio
    audioPlay();
    //show snow
    let isSnow = false;
    const snowControl = document.querySelector('.snow-setting') as HTMLElement;
    if (localStorage.getItem('isSnow')) {
      isSnow = JSON.parse(localStorage.getItem('isSnow') as string);
    }
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
    //choice tree
    getTreesStart();
    //background
    getBgImages();
    // garlands
    getGarland();
    //getToys
    const loader = new Loader();
    const list = await loader.getToyList();
    let arrayToys = list.slice(0, 20);
    if (localStorage.getItem('arrayFavorite')) {
      arrayToys =
        JSON.parse(localStorage.getItem('arrayFavorite') as string).length > 0
          ? JSON.parse(localStorage.getItem('arrayFavorite') as string)
          : arrayToys;
    }
    const containerToysFavorite = document.querySelector('.choice-favorite-toys');
    arrayToys.forEach((item, ind) => {
      const choiceToy = document.createElement('div') as HTMLElement;
      choiceToy.className = 'choice-toy';
      choiceToy.dataset.num = `${ind}`;
      const choiceNumber = document.createElement('p');
      choiceNumber.className = 'choice-number-img';
      choiceNumber.innerText = item.count;
      const result = [] as HTMLElement[];
      for (let i = 0; i < +item.count; i++) {
        const choiceImg = document.createElement('img') as HTMLImageElement;
        choiceImg.className = 'choice-img';
        choiceImg.alt = 'toy';
        choiceImg.draggable = true;
        choiceImg.dataset.number = `${ind}`;
        choiceImg.id = `${item.num}-${i}`;
        choiceImg.src = `./assets/toys/${item.num}.png`;
        result.push(choiceImg);
      }
      choiceToy.append(choiceNumber);
      choiceToy.append(...result);
      containerToysFavorite?.append(choiceToy);
    });
    handleDraggle();
  }
}

export default TreeRender;
