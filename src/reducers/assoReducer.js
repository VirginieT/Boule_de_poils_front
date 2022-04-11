import {
  CHANGE_AGE_FIELD,
  CHANGE_GENDER_FIELD,
  CHANGE_SPECIES_FIELD,
  CHANGE_CHILD_FIELD,
  CHANGE_OTHERS_FIELD,
  CHANGE_GARDEN_FIELD,
  CHANGE_LOC_FIELD,
  CHANGE_STATUS_FIELD,
  SAVE_GEOLOC,
} from 'src/actions/formActions';

const initialState = {
  species: 999,
  gender: 2,
  age: 4,
  childCompatibility: 0,
  otherAnimalCompatibility: 0,
  gardenNeeded: 0,
  status: 1,
  department: 999,
  geolocResults: [],
  displayProfile: 0,
  favorites: [],
  showContact: false,
};

const assoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_STATUS_FIELD:
      return {
        ...state,
        status: action.value,
      };

    case CHANGE_SPECIES_FIELD:
      return {
        ...state,
        species: action.value,
      };

    case CHANGE_GENDER_FIELD:
      return {
        ...state,
        gender: action.value,
      };

    case CHANGE_AGE_FIELD:
      return {
        ...state,
        age: action.value,
      };

    case CHANGE_CHILD_FIELD:
      return {
        ...state,
        childCompatibility: action.value,
      };

    case CHANGE_OTHERS_FIELD:
      return {
        ...state,
        otherAnimalCompatibility: action.value,
      };

    case CHANGE_GARDEN_FIELD:
      return {
        ...state,
        gardenNeeded: action.value,
      };

    case CHANGE_LOC_FIELD:
      return {
        ...state,
        department: action.value,
      };

    case SAVE_GEOLOC: {
      return {
        ...state,
        geolocResults: action.datas,
      };
    }

    default:
      return state;
  }
};

export default assoReducer;
