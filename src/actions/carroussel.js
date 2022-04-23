export const CONNEXION_CARROUSSEL_API = 'CONNEXION_CARROUSSEL_API';
export const SAVE_DATA = 'SAVE_DATA';
export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE';

// action to request datas of 10 random animal profiles to the api

export const connexionCarrousselApi = () => ({
  type: CONNEXION_CARROUSSEL_API,
});

// action to save the datas of 10 random animal profiles from the api

export const saveData = (results) => ({
  type: SAVE_DATA,
  datas: results,
});

// action for switching an animal profile to the next in Carrousel

export const displayNextSlide = () => ({
  type: NEXT_SLIDE,
});

// action for switching an animal profile to the previous in Carrousel

export const displayPreviousSlide = () => ({
  type: PREVIOUS_SLIDE,
});
