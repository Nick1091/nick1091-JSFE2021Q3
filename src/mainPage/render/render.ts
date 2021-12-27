import './render.scss';
class PageMain {
  async mainRender() {
    const main = document.querySelector('.main') as HTMLTemplateElement;
    main.innerHTML = `
    <div class="first__page">
      <div class="toy1"></div>
      <div class="toy2"></div>
      <div class="toy3"></div>
      <h1 class="first__page-title">Новогодняя игра<span>«Наряди ёлку»</span></h1>
      <button class="first__start-game">Начать</button>
    </div>`;
  }
}

export default PageMain;
