export const CHANGE_SPECIES_FIELD = 'CHANGE_SPECIES_FIELD';
export const CHANGE_AGE_FIELD = 'CHANGE_AGE_FIELD';
export const NEXT_PROFILE = 'NEXT_PROFILE';
export const PREVIOUS_PROFILE = 'PREVIOUS_PROFILE';
export const DISPLAY_CONTACT = 'DISPLAY_CONTACT';
export const SAVE_ANIMALS = 'SAVE_ANIMALS';
export const FETCH_ANIMALS = 'FETCH_ANIMALS';

export const changeSpeciesField = (key, newValue) => ({
  type: CHANGE_SPECIES_FIELD,
  species: key,
  value: newValue,
});

export const changeAgeField = (key, newValue) => ({
  type: CHANGE_AGE_FIELD,
  age: key,
  value: newValue,
});

export const displayNextProfile = () => ({
  type: NEXT_PROFILE,
});

export const displayPreviousProfile = () => ({
  type: PREVIOUS_PROFILE,
});

export const displayContact = (bool) => ({
  type: DISPLAY_CONTACT,
  displayed: bool,
});

export const fetchAnimals = () => ({
  type: FETCH_ANIMALS,
});

export const saveFetchedAnimals = (dataReceived) => ({
  type: SAVE_ANIMALS,
  datas: dataReceived,
});
