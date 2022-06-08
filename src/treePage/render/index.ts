import './render.scss';
class PageSecond {
  async mainRender() {
    const main = document.querySelector('.main');
    if (!(main instanceof HTMLElement)) {
      throw new Error('Error');
    }
    main.innerHTML = '';
    const backgroundBlur = document.createElement('div');
    backgroundBlur.className = 'background-blur';
    backgroundBlur.innerHTML = `
          <div class = "second-container">
            <div class="settings-menu">
              <div class="snow-audio-settings">
                <div class="audio-setting"></div>
                <div class="snow-setting"></div>
                <div class="storage-setting">Сброс настроек</div>
              </div>
              <div class="tree-settings">
                <h2 class="title-tree-settings">ВЫБЕРИТЕ ЁЛКУ</h2>
                <div class="tree-settings-container">
                  <div class="green-tree tree-item" data-tree="1"></div>
                  <div class="green-tree tree-item" data-tree="2"></div>
                  <div class="green-tree tree-item" data-tree="3"></div>
                  <div class="green-tree tree-item" data-tree="4"></div>
                  <div class="green-tree tree-item" data-tree="5"></div>
                  <div class="green-tree tree-item" data-tree="6"></div>
                </div>
              </div>
              <div class="bg-settings">
                <h2 class="title-bg-settings">ВЫБЕРИТЕ ФОН</h2>
                <div class="bg-items">
                  <div class="bg-item" data-bg="1"></div>
                  <div class="bg-item" data-bg="2"></div>
                  <div class="bg-item" data-bg="3"></div>
                  <div class="bg-item" data-bg="4"></div>
                  <div class="bg-item" data-bg="5"></div>
                  <div class="bg-item" data-bg="6"></div>
                  <div class="bg-item" data-bg="7"></div>
                  <div class="bg-item" data-bg="8"></div>
                </div>  
              </div>
              <div class="lights-settings">
                <h2 class="title-lights-settings">ГИРЛЯНДА</h2>
                <div class="lights">
                  <div class="lights-btn">
                    <button class="btn-color multicolor-btn" data-color="multicolor"></button>
                    <button class="btn-color red-btn" data-color="red"></button>
                    <button class="btn-color blue-btn" data-color="blue"></button>
                    <button class="btn-color yellow-btn" data-color="yell"></button>
                    <button class="btn-color green-btn" data-color="green"></button>
                  </div>
                  <button class="turn-lights">
                  <label class="turn-lights-label" for="turn-lights-id">
                      <input type="checkbox" name="turn-lights" class="turn-lights-checkbox" id="turn-lights-id">
                      <div class="turn-lights-inner"></div>
                    </label>
                  </button>
                </div>
              </div>
            </div>
            <div class="tree-container">
              <div class="tree-snow-container">
              </div>
              <div class="tree-lights-container"></div>
              <map name="tree-map">
                <area coords="365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664" shape="poly">
              </map>
              <map name="tree-map" class="map"></map>
              <img src="" class="main-tree" usemap="#tree-map" alt="tree">
            </div>
            <div class="choice-menu">
              <div class="choice-favorite">
                <h2 class="choice-favorite-title">ИГРУШКИ</h2>
                <div class="choice-favorite-toys">
                </div>
              </div>
              <div class="choice-tree">
                <h2 class="tree-decorate-title">ВЫ НАРЯДИЛИ</h2>
                <div class="tree-decorate-container">
                  <div class="tree-decorate"></div>
                </div>
              </div>
            </div>
          </div>`;
    main.append(backgroundBlur);
  }
}

export default PageSecond;
