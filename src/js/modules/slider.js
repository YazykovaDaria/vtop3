import { getChild, getAllChild } from "../helpers/helpers";
// import { getAllPets } from "../store/store";

const SLIDER_SELECTOR = '.js-slider';
const SLIDER_WRAPPER_SELECTOR = '.js-slider-wrapper';
const SLIDE_SELECTOR = '.js-slide';
const PREV_BTN_SELECTOR = '.js-slide-prev';
const NEXT_BTN_SELECTOR = '.js-slide-next';

const sliderEl = document.querySelector(SLIDER_SELECTOR);

const sliderWrapper = getChild(sliderEl, SLIDER_WRAPPER_SELECTOR);
const slides = getAllChild(sliderEl, SLIDE_SELECTOR);
const prevButton = getChild(sliderEl, PREV_BTN_SELECTOR);
const nextButton = getChild(sliderEl, NEXT_BTN_SELECTOR);

let currentIndex = 0;

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

  nextButton.addEventListener('click', showNextSlide);
  prevButton.addEventListener('click', showPrevSlide);
};

export default slider;
