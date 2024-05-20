import { getChild, getCard, getAllChild } from '../helpers/helpers';
import { getAllPets } from '../store/store';

const SLIDER_SELECTOR = '.js-slider';
const SLIDER_WRAPPER_SELECTOR = '.js-slider-wrapper';
const PREV_BTN_SELECTOR = '.js-slide-prev';
const NEXT_BTN_SELECTOR = '.js-slide-next';

const sliderEl = document.querySelector(SLIDER_SELECTOR);

const sliderWrapper = getChild(sliderEl, SLIDER_WRAPPER_SELECTOR);
const prevButtons = getAllChild(sliderEl, PREV_BTN_SELECTOR);
const nextButtons = getAllChild(sliderEl, NEXT_BTN_SELECTOR);

const slides = [];
const tabletSize = 1060;
const mobileSize = 740;

// eslint-disable-next-line no-use-before-define
let cardCount = getCardCount();
let currentIndex = 0;

function getCardCount() {
  const screenSize = window.innerWidth;
  if (screenSize < mobileSize) {
    return 1;
  }
  if (screenSize < tabletSize) {
    return 2;
  }
  return 3;
}

const getSlides = () => {
  const pets = getAllPets();

  if (!Array.isArray(pets)) return;

  for (let i = 0; i < pets.length; i += cardCount) {
    const cardsSet = pets.slice(i, i + cardCount);

    if (cardsSet.length !== cardCount) {
      cardsSet.push(pets[0]);
    }

    const cards = cardsSet.reduce((acc, pet) => `${acc} ${getCard(pet)}`, '');
    const slide = `<div class="slider__slide"><div class="friends__cards">${cards}</div></div>`;

    slides.push(slide);
  }

  sliderWrapper.innerHTML = slides.join('');
};

const resizeHandler = () => {
  const newCardCount = getCardCount();

  if (cardCount !== newCardCount) {
    cardCount = newCardCount;
    slides.length = 0;
    getSlides();
  }
};

function showSlide(index) {
  const offset = -index * 100;
  sliderWrapper.style.transform = `translateX(${offset}%)`;
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

const slider = () => {
  if (!sliderEl) return;

  getSlides();
  window.addEventListener('resize', resizeHandler);

  nextButtons.forEach((btn) => btn.addEventListener('click', showNextSlide));
  prevButtons.forEach((btn) => btn.addEventListener('click', showPrevSlide));
};

export default slider;
