import Header from './render/render';
import CardRender from './controllerFilters/ControllerFilters';

import './style/style.scss';

const app = new Header();
app.mainRender();
const card = new CardRender();
card.getCard();
