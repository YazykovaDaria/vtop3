export const containCls = (el, cls) => el.classList.contains(cls);

const blockPageScroll = (isBlock = true) => {
  const htmlElement = document.documentElement;
  if (isBlock) {
    htmlElement.style.overflow = 'hidden';
  } else {
    htmlElement.style.overflow = 'auto';
  }
};

export default blockPageScroll;
