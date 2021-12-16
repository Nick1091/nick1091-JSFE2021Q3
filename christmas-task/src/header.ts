class Header {
  headerRender() {
    const headerContainer = document.querySelector('.header__container') as HTMLTemplateElement;
    const mainContainer = document.querySelector('.main__container') as HTMLTemplateElement;
    // const cardContainer = document.querySelector('.card__container') as HTMLTemplateElement;
    const fragment = ` 
    <div class="header__navigation">
      <a href="#" class="page-main"></a>
      <a href="#"class="page-first">Игрушки</ф>
      <a href="#"class="page-second">Ёлка</a>
    </div>
    <div class="header__controls">
        <input type="search" class="search" autocomplete="off" >
        <div class="selected"><span>0</span></div>
    </div>`;
    headerContainer.innerHTML = fragment;
    const fragmentControl = `
    <div class="controls-panel">                  
      <div class="filters-meaning">
          <div class="controls-title">Фильтры по значению</div>
          <div class="shape">Форма:  
              <button data-filter="шар"></button>
              <button data-filter="колокольчик"></button>
              <button data-filter="шишка"></button>
              <button data-filter="снежинка"></button>
              <button data-filter="фигурка"></button>
          </div>
          <div class="color">Цвет:   
              <button data-filter="белый"></button>
              <button data-filter="желтый"></button>
              <button data-filter="красный"></button>
              <button data-filter="синий"></button>
              <button data-filter="зелёный"></button>
          </div>
          <div class="size">Размер: 
              <button data-filter="большой"></button>
              <button data-filter="средний"></button>
              <button data-filter="малый"></button>
          </div>
          <div class="favorite__toys">Только любимые:
              <div class="favorite__form">
                <input type="checkbox" checked class="favorite__input" id="checkbox"/>
                <label for="checkbox" class="favorite__input-label"></label>
              </div>   
          </div> 
      </div>
      <div class="filters-range">
            <div class="controls-title">Фильтры по диапазону</div>
            <div class="count-toys">
                <span class="control-span">Количество экземпляров:</span> 
                <div class="count-toys-container">
                    <output class="toys-output">1</output>
                    <div class="count-slider"></div>
                    <output class="toys-output">12</output>
                </div>          
            </div>
            <div class="year">
            <span class="control-span">Год приобретения:</span> 
                <div class="year-toys-container">
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
          <button class="reset">Сброс фильтров</button>
      </div>
    </div> `;
    mainContainer.innerHTML = fragmentControl;
  }
}

export default Header;
