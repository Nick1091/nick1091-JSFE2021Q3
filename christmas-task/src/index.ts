import Header from './render';
import CardRender from './card';
import { myGrade } from './mygrade';

import './style/style.scss';
import './style/card.scss';
import './style/header.scss';
import './style/slider.scss';
import './style/popup.scss';

const app = new Header();
app.headerRender();

// tag keyof HTMLElementTagNameMap;
const card = new CardRender();
card.getCard();

console.log(myGrade);
