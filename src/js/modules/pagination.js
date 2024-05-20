/* eslint-disable no-use-before-define */
import { shuffleArr, getChild } from '../helpers/helpers';
import { getAllPets } from '../store/store';
import Card from './card';

const PAGINATION_SELECTOR = '.js-pagination';
const PAGINATION_BODY_SELECTOR = '.js-pagination-body';
const PREV_BTN_SELECTOR = '.js-prev';
const FIRST_BTN_SELECTOR = '.js-first';
const NEXT_BTN_SELECTOR = '.js-next';
const LAST_BTN_SELECTOR = '.js-last';
const CURRENT_BTN_SELECTOR = '.js-current';

const paginationEl = document.querySelector(PAGINATION_SELECTOR);
const paginationBody = getChild(paginationEl, PAGINATION_BODY_SELECTOR);

const prevBtn = getChild(paginationEl, PREV_BTN_SELECTOR);
const firstBtn = getChild(paginationEl, FIRST_BTN_SELECTOR);
const nextBtn = getChild(paginationEl, NEXT_BTN_SELECTOR);
const lastBtn = getChild(paginationEl, LAST_BTN_SELECTOR);
const currentBtn = getChild(paginationEl, CURRENT_BTN_SELECTOR);

const cards = [];
const tabletSize = 1060;
const mobileSize = 740;

const pets = getPetsData();
let cardCount = getCardCount();
let paginationCount = setPaginationCount();
let currentPage = 1;

function getPetsData() {
  const data = [];
  const count = 6;

  for (let i = 0; i < count; i += 1) {
    const shuffedPets = shuffleArr(getAllPets());
    data.push(shuffedPets);
  }
  return data.flat();
}

function getCardCount() {
  const screenSize = window.innerWidth;
  if (screenSize < mobileSize) {
    return 3;
  }
  if (screenSize < tabletSize) {
    return 6;
  }
  return 8;
}

function setPaginationCount() {
  return Math.ceil(pets.length / cardCount);
}

const setCards = () => {
  for (let i = 0; i < cardCount; i += 1) {
    const card = new Card(pets[i]);
    paginationBody.append(card.getCard());

    cards.push(card);
  }
  // reverse for correct position cards when page updates
  cards.reverse();
};

const resizeHandler = () => {
  const newCardCount = getCardCount();

  if (cardCount !== newCardCount) {
    cardCount = newCardCount;
    cards.length = 0;
    paginationCount = setPaginationCount();

    paginationBody.innerHTML = '';
    setCards();
  }
};

const showPrev = () => {
  currentPage -= 1;
  updatePaginationPage();
};

const showNext = () => {
  currentPage += 1;
  updatePaginationPage();
};

const showFirst = () => {
  currentPage = 1;
  updatePaginationPage();
};

const showLast = () => {
  currentPage = paginationCount;
  updatePaginationPage();
};

const updateBtnState = () => {
  prevBtn.disabled = isFirstPage();
  firstBtn.disabled = isFirstPage();

  nextBtn.disabled = isLastPage();
  lastBtn.disabled = isLastPage();
};

const updateCurrentBtnText = () => {
  currentBtn.textContent = currentPage;
};

const isLastPage = () => currentPage === paginationCount;

const isFirstPage = () => currentPage === 1;

const updatePaginationPage = () => {
  updateCurrentBtnText();
  updateBtnState();

  cards.forEach((card, i) => {
    const count = Math.floor(cardCount * currentPage - 1);
    const data = pets[count - i];
    card.updateCard(data);
  });
};

const pagination = () => {
  if (!paginationEl) return;

  setCards();

  window.addEventListener('resize', resizeHandler);

  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);
  firstBtn.addEventListener('click', showFirst);
  lastBtn.addEventListener('click', showLast);
};

export default pagination;
