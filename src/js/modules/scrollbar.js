import SimpleBar from 'simplebar';

const SCROLLBAR_SELECTOR = '.js-scrollbar';
const scrollEl = document.querySelector(SCROLLBAR_SELECTOR);

const scrollbar = () => {
  if (!scrollEl) return;

  // eslint-disable-next-line no-new
  new SimpleBar(scrollEl, { autoHide: false, scrollbarMaxSize: 104 });
};

export default scrollbar;
