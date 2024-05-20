import goHeader from './modules/header';
import goPopup from './modules/popup';
import slider from './modules/slider';
import pagination from './modules/pagination';

const app = () => {
  goHeader();
  goPopup();
  slider();
  pagination();
};

document.addEventListener('DOMContentLoaded', () => app());
