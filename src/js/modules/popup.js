import blockPageScroll, { getChild } from '../helpers/helpers';
import getPet from '../store/store';

const POPOP_TRIGGER_SELECTOR = '.js-open-popup';
const POPUP_SELECTOR = '.js-popup';
const PUPUP_BODY_SELECTOR = '.js-popup-body';

const CSS_CLASSES = {
  visiblePopup: 'popup--visible',
};

const popupEl = document.querySelector(POPUP_SELECTOR);
const popupBodyEl = getChild(popupEl, PUPUP_BODY_SELECTOR);

const addPopupContent = (pet) => {
  const template = `<div class="card-popup">
<div class="card-popup__img">
  <img src="${pet.img}" alt="pet">
</div>
<div class="card-popup__content">
  <div class="card-popup__titles">
    <h2 class="title card-popup__title">${pet.name}</h2>
    <h3 class="subtitle card-popup__subtitle">${pet.type} - ${pet.breed}</h3>
  </div>
  <div class="card-popup__text">${pet.description}</div>
  <ul class="card-popup__list">
  <li class="card-popup__item">
    Age:
    <span class="card-popup__item-text">${pet.age}</span></li>
  <li class="card-popup__item">
    Inoculations:
      <span class="card-popup__item-text">${pet.inoculations.join(' ')}</span></li>
  <li class="card-popup__item">
    Diseases:
        <span class="card-popup__item-text">${pet.diseases.join(' ')}</span></li>
  <li class="card-popup__item">
    Parasites:
          <span class="card-popup__item-text">${pet.parasites.join(' ')}</span></li>
</ul>
</div>
</div>`;
  popupBodyEl.innerHTML = template;
};

const openPopup = (e) => {
  const { target } = e;
  const popupTrigger = target.closest(POPOP_TRIGGER_SELECTOR);

  if (!popupTrigger) return;

  const pet = getPet(popupTrigger.dataset.id);
  addPopupContent(pet);

  popupEl.classList.add(CSS_CLASSES.visiblePopup);
  blockPageScroll();
};

const closePopup = (e) => {
  const { target } = e;
  const isPopupBody = target.closest(PUPUP_BODY_SELECTOR);

  if (isPopupBody) return;

  popupEl.classList.remove(CSS_CLASSES.visiblePopup);
  blockPageScroll(false);
};

const goPopup = () => {
  if (!popupEl) return;

  document.body.addEventListener('click', openPopup);

  popupEl.addEventListener('click', closePopup);
};

export default goPopup;
