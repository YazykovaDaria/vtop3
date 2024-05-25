import goHeader from './modules/header';
import lngSwitcher from './modules/lng-switcher';

const app = () => {
  goHeader();
  lngSwitcher();
};

document.addEventListener('DOMContentLoaded', () => app());
