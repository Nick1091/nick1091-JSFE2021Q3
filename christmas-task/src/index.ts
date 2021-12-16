import Header from './header';
import CardRender from './card';

import './style/style.scss';
import './style/card.scss';
import './style/header.scss';
import './style/slider.scss';

// tag keyof HTMLElementTagNameMap
const app = new Header();
app.headerRender();

const card = new CardRender();
card.getCard();
