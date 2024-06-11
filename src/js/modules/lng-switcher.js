import { getChild } from '../helpers/helpers';

const LNG_SWITCHER_SELECTOR = '.js-lng-switch';
const LNG_INDICATOR_SELECTOR = '.js-indicator';
const TOGGLE_OPEN_SELECTOR = '.js-toggle-open';
const OPEN_TOUCH_CLASS = 'dropdown--touch';
const MOUSE_CLAS = 'dropdown--mouse';

const isTouchSupported = 'ontouchstart' in window || window.navigator.maxTouchPoints;

const lngEl = document.querySelector(LNG_SWITCHER_SELECTOR);
const indicatorEl = getChild(lngEl, LNG_INDICATOR_SELECTOR);
const toggleEl = getChild(lngEl, TOGGLE_OPEN_SELECTOR);

const changeHandler = (e) => {
  const { value } = e.target;
  indicatorEl.textContent = value;

  if (isTouchSupported) {
    lngEl.classList.remove(OPEN_TOUCH_CLASS);
  }
};

const touchHandler = () => {
  lngEl.classList.toggle(OPEN_TOUCH_CLASS);
};

const handleClickOutside = (e) => {
  const { target } = e;
  if (!lngEl.contains(target)) {
    lngEl.classList.remove(OPEN_TOUCH_CLASS);
  }
};

const lngSwitcher = () => {
  if (!lngEl) return;

  if (isTouchSupported) {
    toggleEl.addEventListener('pointerenter', touchHandler);
    document.addEventListener('click', handleClickOutside);
  } else {
    lngEl.classList.add(MOUSE_CLAS);
  }

  lngEl.addEventListener('change', changeHandler);
  lngEl.addEventListener('submit', (e) => e.preventDefault());
};

export default lngSwitcher;
