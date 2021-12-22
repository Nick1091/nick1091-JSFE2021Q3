import './render.scss';
class Header {
  async headerRender() {
    const main = document.querySelector('.main') as HTMLTemplateElement;
    const backgroundBlur = document.createElement('div');
    const mainContainer = document.createElement('div');
    const cardContainer = document.createElement('div');
    backgroundBlur.className = 'background-blur';
    mainContainer.className = 'main__container';
    cardContainer.className = 'card__container';
    mainContainer.innerHTML = `
        <div class="controls-panel">                  
          <div class="filters-meaning">
              <div class="controls-title">Фильтры по значению</div>
              <div data-filter ="shape" class="shape">Форма:  
                  <button data-filter="шар"></button>
                  <button data-filter="колокольчик"></button>
                  <button data-filter="шишка"></button>
                  <button data-filter="снежинка"></button>
                  <button data-filter="фигурка"></button>
              </div>
              <div data-filter ="color" class="color">Цвет:   
                  <button data-filter="белый"></button>
                  <button data-filter="желтый"></button>
                  <button data-filter="красный"></button>
                  <button data-filter="синий"></button>
                  <button data-filter="зелёный"></button>
              </div>
              <div data-filter ="size" class="size">Размер: 
                  <button data-filter="большой"></button>
                  <button data-filter="средний"></button>
                  <button data-filter="малый"></button>
              </div>
              <div class="favorite__toys">Только любимые:
                  <div data-filter ="favorites"class="favorite__form favorites">
                    <input type="checkbox" data-filter ="favorite" class="favorite__input" id="checkbox"/>
                    <label for="checkbox" class="favorite__input-label"></label>
                  </div>   
              </div> 
          </div>
          <div class="filters-range">
                <div class="controls-title">Фильтры по диапазону</div>
                <div class="count-toys">
                    <span class="control-span">Количество экземпляров:</span> 
                    <div data-filter ="count-slider" class="count-toys-container">
                        <output class="toys-output">1</output>
                        <div class="count-slider"></div>
                        <output class="toys-output">12</output>
                    </div>          
                </div>
                <div class="year">
                <span class="control-span">Год приобретения:</span> 
                    <div data-filter ="years-slider" class="year-toys-container">
                        <output class="toys-output">1940</output>
                        <div class="year-slider"></div>
                        <output class="toys-output">2020</output>
                    </div>          
                </div>
          </div>
          <div class="filters-sort">
              <div class="controls-title">Сортировка</div>
              <select class="sort-select">
                <option selected value="sort-name-max">По названию от «А» до «Я»</option>
                <option value="sort-name-min">По названию от «Я» до «А»</option>
                <option value="sort-count-max">По количеству по возрастанию</option>
                <option value="sort-count-min">По количеству по убыванию</option>
              </select>
              <button class="resetSettings">Сброс настроек</button>
              <button class="reset">Сброс фильтров</button>
          </div>
        </div> `;
    main.append(backgroundBlur);
    backgroundBlur.append(mainContainer);
    backgroundBlur.append(cardContainer);
  }
}

export default Header;
