// import Card from './card';
// import createElement from '../utils/createElement';
// import createImage from '../utils/createImg';
// import iconLeft from '../assets/icons/Arrow-left.svg';
// import iconRight from '../assets/icons/Arrow-right.svg';

// const classNames = {
//   SLIDER: 'slider',
//   BUTTON: 'btn-round',
//   WRAPPER: 'slider__wrapper',
//   CARD_CONTAINER: 'card__container',
//   CARD_GROUP: 'card__group',
//   ANIMATE_LEFT: 'animate__left',
//   ANIMATE_RIGHT: 'animate__right',
//   NO_TRANSITION: 'container__no-transition',
// };

// const COUNT_CARD = 3;
// const COUNT_CARD_BLOCK = 3;
// const INDEX_VISIBLE_GROUP = 2;

// let cardContainer = null;
// let buttonLeft = null;
// let buttonRight = null;
// const cards = new Array();
// let visibleCards = new Array();
// let leftCards = new Array();
// let rightCards = new Array();
// let deltaOrder = 0;


// function createComponent(petsJSON) {
//   if (!Array.isArray(petsJSON)) {
//     throw new Error(`Slider error. Pets array is invalid.`);
//   }

//   const component = createElement('section', classNames.SLIDER);

//   buttonLeft = createElement('button', classNames.BUTTON);
//   const btnIconLeft = createImage(iconLeft, 'left');
//   buttonLeft.append(btnIconLeft);
//   component.append(buttonLeft);

//   const wrapper = createElement('div', classNames.WRAPPER);

//   cardContainer = createElement('div', classNames.CARD_CONTAINER);
//   wrapper.append(cardContainer);

//   petsJSON.forEach((pet) => {
//     const cardComponent = new Card(pet).init();
//     cards.push(cardComponent);
//   });

//   for (let i = 0; i < COUNT_CARD_BLOCK; i += 1) {
//     const cardGroup = createElement('div', classNames.CARD_GROUP);
//     cardGroup.style.order = `${i + 1}`;
//     cardContainer.append(cardGroup);
//   }
//   for (let i = 0; i < COUNT_CARD; i += 1) {
//     cardContainer.children[1].append(cards[i]);
//     visibleCards.push(cards[i]);
//   }

//   component.append(wrapper);

//   buttonRight = createElement('button', classNames.BUTTON);
//   const btnIconRight = createImage(iconRight, 'right');
//   buttonRight.append(btnIconRight);

//   component.append(buttonRight);

//   buttonLeft.addEventListener('click', buttonLeftClickHandler);
//   buttonRight.addEventListener('click', buttonRightClickHandler);
//   cardContainer.addEventListener('transitionend', endTransitionHandler);

//   return component;
// }

// // function createElement(tagName, className) {
// //   const element = document.createElement(tagName);
// //   element.classList.add(className);
// //   return element;
// // }

// function buttonLeftClickHandler() {
//   let rightCardGroup = null;
//   for (const group of cardContainer.children) {
//     if (Number(group.style.order) === INDEX_VISIBLE_GROUP + 1) {
//       rightCardGroup = group;
//       break;
//     }
//   }
//   while (rightCardGroup.firstElementChild) {
//     rightCardGroup.firstElementChild.remove();
//   }

//   // const cardsToShow = getRightCardsGroup();
//   // cardsToShow.forEach((card) => {
//   //   rightCardGroup.insertAdjacentElement('beforeend', card);
//   // });

//   deltaOrder = -1;
//   cardContainer.classList.add(classNames.ANIMATE_LEFT);
//   disableButtons();
// }
// function buttonRightClickHandler() {
//   let leftCardGroup = null;
//   for (const group of cardContainer.children) {
//     if (Number(group.style.order) === INDEX_VISIBLE_GROUP - 1) {
//       leftCardGroup = group;
//       break;
//     }
//   }
//   while (leftCardGroup.firstElementChild) {
//     leftCardGroup.firstElementChild.remove();
//   }

//   const cardsToShow = getLeftCardsGroup();
//   cardsToShow.forEach((card) => {
//     leftCardGroup.insertAdjacentElement('beforeend', card);
//   });

//   deltaOrder = 1;
//   cardContainer.classList.add(classNames.ANIMATE_RIGHT);
//   disableButtons();
// }
// function disableButtons() {
//   buttonLeft.setAttribute('disabled', true);
//   buttonRight.setAttribute('disabled', true);
// }
// function enableButtons() {
//   buttonLeft.removeAttribute('disabled');
//   buttonRight.removeAttribute('disabled');
// }
// function endTransitionHandler() {
//   cardContainer.classList.add(classNames.NO_TRANSITION);
//   for (const group of cardContainer.children) {
//     let order = Number(group.style.order);
//     order += deltaOrder;
//     if (order <= 0) {
//       order = COUNT_CARD;
//     } else if (order > COUNT_CARD) {
//       order = 1;
//     }
//     group.style.order = order;
//   }

//   cardContainer.classList.remove(classNames.ANIMATE_LEFT, classNames.ANIMATE_RIGHT);
//   setTimeout(() => {
//     cardContainer.classList.remove(classNames.NO_TRANSITION);
//     enableButtons();
//   }, 1);
// }
// function getRightCardsGroup() {
//   let cardsToShow = null;
//   if (rightCards.length > 0) {
//     cardsToShow = new Array(...rightCards);
//     rightCards = new Array();
//   } else {
//     cardsToShow = getRandomCards();
//   }
//   leftCards = new Array(...visibleCards);
//   visibleCards = new Array(...cardsToShow);

//   return cardsToShow;
// }
// function getLeftCardsGroup() {
//   let cardsToShow = null;
//   if (leftCards.length > 0) {
//     cardsToShow = new Array(...leftCards);
//     leftCards = new Array();
//   } else {
//     cardsToShow = getRandomCards();
//   }
//   rightCards = new Array(...visibleCards);
//   visibleCards = new Array(...cardsToShow);

//   return cardsToShow;
// }
// function getRandomCards() {
//   const cardsToShow = new Array();
//   while (cardsToShow.length < COUNT_CARD) {
//     const index = getRandomNumber(0, cards.length - 1);
//     if (!visibleCards.includes(cards[index]) && !cardsToShow.includes(cards[index])) {
//       cardsToShow.push(cards[index]);
//     }
//   }
//   return cardsToShow;
// }
// function getRandomNumber(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// export default createComponent;
