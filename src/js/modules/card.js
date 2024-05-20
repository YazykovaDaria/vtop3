import { createEl } from '../helpers/helpers';

const btnContent = 'Learn more';

class Card {
  constructor(petData) {
    this.pet = petData;

    this.card = null;
    this.img = null;
    this.title = null;

    this.setCard();
  }

  getCard = () => this.card;

  setCard = () => {
    const card = createEl('atricle', ['card', 'js-open-popup'], {
      name: 'data-id',
      value: this.pet.id,
    });

    const img = createEl('img', ['card__img'], { name: 'src', value: this.pet.img });
    img.alt = 'pet';

    const title = createEl('p', ['title', 'card__title'], null, this.pet.name);

    const btn = createEl(
      'button',
      ['btn', 'card__btn'],
      { name: 'type', value: 'button' },
      btnContent
    );

    card.prepend(btn);
    card.prepend(title);
    card.prepend(img);

    this.card = card;
    this.img = img;
    this.title = title;
  };

  updateCard = (newPet) => {
    this.pet = newPet;
    const { id, img, name } = this.pet;

    this.title.textContent = name;
    this.img.setAttribute('src', img);
    this.card.setAttribute('data-id', id);
  };
}

export default Card;
