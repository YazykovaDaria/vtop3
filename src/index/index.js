import './index.html';
import './index.scss';
import code from '../assets/img/code.png';

const imgWrap = document.querySelector('.img');
const img = new Image();

img.src = code;
img.width = 700;
imgWrap.append(img);
console.log('hell main');
