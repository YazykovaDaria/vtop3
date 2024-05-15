export const containCls = (el, cls) => el.classList.contains(cls);

export const getChild = (parentEl, selector) =>
  parentEl ? parentEl.querySelector(selector) : null;

const blockPageScroll = (isBlock = true) => {
  const htmlElement = document.documentElement;
  if (isBlock) {
    htmlElement.style.overflow = 'hidden';
  } else {
    htmlElement.style.overflow = 'auto';
  }
};

export default blockPageScroll;
