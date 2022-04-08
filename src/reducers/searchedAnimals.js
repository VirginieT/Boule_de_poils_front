import {
  NEXT_PROFILE,
  PREVIOUS_PROFILE,
  DISPLAY_CONTACT,
  SAVE_ANIMALS,
  CHANGE_AGE_FIELD,
  CHANGE_GENDER_FIELD,
  CHANGE_SPECIES_FIELD,
  CHANGE_CHILD_FIELD,
  CHANGE_OTHERS_FIELD,
  CHANGE_GARDEN_FIELD,
  CHANGE_LOC_FIELD,
  SUBMIT_FORM,
} from 'src/actions/animalSearched';

const initialState = {
  species: 0,
  gender: 3,
  age: 4,
  childCompatibility: 0,
  otherAnimalCompatibility: 0,
  gardenNeeded: 3,
  department: 0,
  animalResults: [],
  displayProfile: 0,
  favorites: [],
  showContact: false,
  formSubmit: false,

};

const searchedAnimalsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
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

    case NEXT_PROFILE: {
      const newState = { ...state };

      const maxIndex = newState.displayProfile + 1 >= newState.animalResults.length
        ? newState.displayProfile = 0 : newState.displayProfile + 1;

      newState.displayProfile = maxIndex;
      newState.showContact = false;
      return newState;
    }

    case PREVIOUS_PROFILE: {
      const newState = { ...state };

      const minIndex = newState.displayProfile - 1 < 0
        ? newState.displayProfile = newState.animalResults.length - 1
        : newState.displayProfile - 1;

      newState.displayProfile = minIndex;
      newState.showContact = false;
      return newState;
    }

    case DISPLAY_CONTACT: {
      return {
        ...state,
        showContact: action.displayed,
      };
    }

    case SAVE_ANIMALS: {
      return {
        ...state,
        animalResults: action.datas,
      };
    }

    case SUBMIT_FORM: {
      return {
        ...state,
        formSubmit: true,
      };
    }

    default:
      return state;
  }
};

export default searchedAnimalsReducer;
