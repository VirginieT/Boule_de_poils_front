export const CHANGE_SPECIES_FIELD = 'CHANGE_SPECIES_FIELD';
export const CHANGE_AGE_FIELD = 'CHANGE_AGE_FIELD';
export const CHANGE_GENDER_FIELD = 'CHANGE_GENDER_FIELD';
export const CHANGE_CHILD_FIELD = 'CHANGE_CHILDREN_FIELD';
export const CHANGE_OTHERS_FIELD = 'CHANGE_OTHERS_FIELD';
export const CHANGE_GARDEN_FIELD = 'CHANGE_GARDEN_FIELD';
export const CHANGE_LOC_FIELD = 'CHANGE_LOC_FIELD';
export const CHANGE_STATUS_FIELD = 'CHANGE_STATUS_FIELD';
export const FETCH_DEPARTMENT = 'FETCH_DEPARTMENT';
export const SAVE_DEPARTMENT = 'SAVE_DEPARTEMENT';
export const FETCH_SPECIES = 'FETCH_SPECIES';
export const SAVE_SPECIES = 'SAVE_SPECIES';
export const SUBMIT_FORM = 'SUBMIT_FORM';

export const changeStatusField = (key, newValue) => ({
  type: CHANGE_STATUS_FIELD,
  species: key,
  value: newValue,
});

export const changeSpeciesField = (key, newValue) => ({
  type: CHANGE_SPECIES_FIELD,
  species: key,
  value: newValue,
});

export const changeGenderField = (key, newValue) => ({
  type: CHANGE_GENDER_FIELD,
  species: key,
  value: newValue,
});

export const changeChildField = (key, newValue) => ({
  type: CHANGE_CHILD_FIELD,
  species: key,
  value: newValue,
});

export const changeOthersField = (key, newValue) => ({
  type: CHANGE_OTHERS_FIELD,
  species: key,
  value: newValue,
});

export const changeGardenField = (key, newValue) => ({
  type: CHANGE_GARDEN_FIELD,
  species: key,
  value: newValue,
});

export const changeLocField = (key, newValue) => ({
  type: CHANGE_LOC_FIELD,
  species: key,
  value: newValue,
});

export const changeAgeField = (key, newValue) => ({
  type: CHANGE_AGE_FIELD,
  age: key,
  value: newValue,
});

export const formSubmit = () => ({
  type: SUBMIT_FORM,
});

export const fetchDepartments = () => ({
  type: FETCH_DEPARTMENT,
});

export const saveFetchedDepartments = (dataReceived) => ({
  type: SAVE_DEPARTMENT,
  datas: dataReceived,
});

export const fetchSpecies = () => ({
  type: FETCH_SPECIES,
});

export const saveFetchedSpecies = (dataReceived) => ({
  type: SAVE_SPECIES,
  datas: dataReceived,
});
