import { getChild } from '../helpers/helpers';

const LNG_SWITCHER_SELECTOR = '.js-lng-switch';
const LNG_INDICATOR_SELECTOR = '.js-indicator';

const lngEl = document.querySelector(LNG_SWITCHER_SELECTOR);
const indicatorEl = getChild(lngEl, LNG_INDICATOR_SELECTOR);

const changeHandler = (e) => {
  const { value } = e.target;
  indicatorEl.textContent = value;
};

const lngSwitcher = () => {
  if (!lngEl) return;

  lngEl.addEventListener('change', changeHandler);
  lngEl.addEventListener('submit', (e) => e.preventDefault());
};

export default lngSwitcher;
