import blockPageScroll, { containCls } from '../helpers/helpers';

const HEADER_SELECTOR = '.js-header';
const BURGER_SELECTOR = '.js-burger';
const CLOSE_MENU_CLASS = 'js-close-menu';
const CSS_CLASSES = {
  activeBurger: 'burger--active',
  acativeHeader: 'header--active',
  scrolledHeader: 'header--scrolled',
  headerHome: 'header--home',
  hideHeader: 'header--hide',
};

const headerEl = document.querySelector(HEADER_SELECTOR);
const burgerEl = headerEl.querySelector(BURGER_SELECTOR);

const defaultOffset = 300;

let lastScroll = 0;
let isScroll = false;

// header mobile menu

const toggleMenu = () => {
  headerEl.classList.toggle(CSS_CLASSES.acativeHeader);
  burgerEl.classList.toggle(CSS_CLASSES.activeBurger);

  isScroll = !isScroll;

  blockPageScroll(isScroll);
};

const closeMenu = (e) => {
  const { target } = e;

  if (target.classList.contains(CLOSE_MENU_CLASS)) {
    isScroll = false;
    blockPageScroll(isScroll);

    headerEl.classList.remove(CSS_CLASSES.acativeHeader);
  }
};

// toggle header visible and bg-color when page scrolling

const changeHeaderBg = (scrollPosition) => {
  const containScrolled = containCls(headerEl, CSS_CLASSES.scrolledHeader);

  if (scrollPosition < 70 && containScrolled) {
    headerEl.classList.remove(CSS_CLASSES.scrolledHeader);
  } else if (scrollPosition > 70 && !containScrolled) {
    headerEl.classList.add(CSS_CLASSES.scrolledHeader);
  }
};

const scrolledHeader = () => {
  const scrollPosition = window.scrollY;

  const isHomePage = containCls(headerEl, CSS_CLASSES.headerHome);
  if (isHomePage) {
    changeHeaderBg(scrollPosition);
  }

  const containHide = containCls(headerEl, CSS_CLASSES.hideHeader);

  if (scrollPosition > lastScroll && !containHide && scrollPosition > defaultOffset) {
    // scroll down
    headerEl.classList.add(CSS_CLASSES.hideHeader);
  } else if (scrollPosition < lastScroll && containHide) {
    // scroll up
    headerEl.classList.remove(CSS_CLASSES.hideHeader);
  }

  lastScroll = scrollPosition;
};

const goHeader = () => {
  window.addEventListener('scroll', scrolledHeader);

  burgerEl.addEventListener('click', toggleMenu);
  headerEl.addEventListener('click', closeMenu);
};

export default goHeader;
