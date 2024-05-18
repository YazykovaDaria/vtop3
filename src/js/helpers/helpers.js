export const containCls = (el, cls) => el.classList.contains(cls);

export const getChild = (parentEl, selector) =>
  parentEl ? parentEl.querySelector(selector) : null;

export const getAllChild = (parentEl, selector) =>
  parentEl ? parentEl.querySelectorAll(selector) : null;

export const getCard = (pet) => {
  const template = `<article class="card js-open-popup" data-id="${pet.id}">
    <img class="card__img" src="${pet.img}" alt='pet'/>
    <p class="title card__title">${pet.name}</p>
    <button class="btn card__btn" type='button'>Learn more</button>
    </article>`;
  return template;
};

const blockPageScroll = (isBlock = true) => {
  const htmlElement = document.documentElement;
  if (isBlock) {
    htmlElement.style.overflow = 'hidden';
  } else {
    htmlElement.style.overflow = 'auto';
  }
};

export default blockPageScroll;
