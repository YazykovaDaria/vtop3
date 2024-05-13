import pets from './data';

const store = {
  pets,

  getAllPets() {
    return pets;
  },

  getPet(id) {
    return this.pets.find((pet) => pet.id === Number(id));
  },
};

const getPet = store.getPet.bind(store);
export const getAllPets = store.getAllPets.bind(store);

export default getPet;
