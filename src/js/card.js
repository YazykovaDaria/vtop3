// import createElement from '../utils/createElement';
// import createImage from '../utils/createImg';
// import popup from './popup';

// const classNames = {
//   card: 'card friends__card',
//   title: 'title card__title',
//   btn: 'btn card__btn',
//   img: 'card__img',
// };

// const btnContent = 'Learn more';

// const getCard = (pet) => {
//   const clickHandler = () => {
//     popup(pet);
//   };

//   const card = createElement('div', classNames.card, '', clickHandler);
//   const img = createImage(pet.img, pet.breed, classNames.img);
//   const title = createElement('p', classNames.title, pet.name);
//   const btn = createElement('button', classNames.btn, btnContent);

//   card.append(img, title, btn);

//   return card;
// };

// export default getCard;

// class Card {
//   constructor(pet) {
//     this.pet = pet;

//     this.card = createElement('div', classNames.card, '', this.clickHandler);
//     this.img = createImage(pet.img, pet.type, classNames.img);
//     this.title = createElement('p', classNames.title, pet.name);
//     this.btn = createElement('button', classNames.btn, btnContent);
//   }

//   clickHandler() {
//     popup(this.pet);
//   }

//   init() {

//     const { img, title, btn, card } = this;
//     card.append(img, title, btn);

//     return card;
//   }

//   update(newPet) {
//     this.pet = newPet;
//     this.img.src = newPet.img;
//     this.img.alt = newPet.breed;
//     this.title = newPet.name;
//   }
// }

// export default Card;
