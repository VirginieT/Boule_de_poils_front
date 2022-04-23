export const CONNEXION_ASSOCIATION_API = 'CONNEXION_ASSOCIATION_API';
export const SAVE_DATA_ASSOCIATION = 'SAVE_DATA_ASSOCIATION';

// action for requesting datas of all associations to the api

export const connexionAssociationApi = () => ({
  type: CONNEXION_ASSOCIATION_API,
});

// action for saving the datas of all associations sent from the api

export const saveDataAssociation = (results) => ({
  type: SAVE_DATA_ASSOCIATION,
  datas: results,
});
