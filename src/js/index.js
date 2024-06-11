import goHeader from './modules/header';
import lngSwitcher from './modules/lng-switcher';
import scrollbar from './modules/scrollbar';

const app = () => {
  goHeader();
  lngSwitcher();
  scrollbar();
};

document.addEventListener('DOMContentLoaded', () => app());
