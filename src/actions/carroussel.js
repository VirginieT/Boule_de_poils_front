export const CONNEXION_CARROUSSEL_API = 'CONNEXION_CARROUSSEL_API';

export const SAVE_DATA = 'SAVE_DATA';

export const NEXT_PROFILE = 'NEXT_PROFILE';

export const PREVIOUS_PROFILE = 'PREVIOUS_PROFILE';


// Connexion avec l'api

export const connexionCarrousselApi = () => ({
  type: CONNEXION_CARROUSSEL_API,

});

// sauvegarde des donnés de l'api dans le state

export const saveData = (results) => ({

  type: SAVE_DATA,
  datas: results,


});

export const displayNextProfile = () => ({
  type: NEXT_PROFILE,
});

export const displayPreviousProfile = () => ({
  type: PREVIOUS_PROFILE,
});
