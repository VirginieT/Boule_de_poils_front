import {
  NEXT_PROFILE,
  PREVIOUS_PROFILE,
  DISPLAY_CONTACT,
  SAVE_ANIMALS,
  CHANGE_AGE_FIELD,
  CHANGE_SPECIES_FIELD,
} from 'src/actions/animalSearched';

const initialState = {
  species: '',
  gender: '',
  age: '',
  childCompatibility: '',
  otherAnimalCompatibility: '',
  gardenNeeded: '',
  department: '',
  animalResults: [],
  displayProfile: 0,
  favorites: [],
  showContact: false,
};

const searchedAnimalsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SPECIES_FIELD:
      return {
        ...state,
        species: action.value,
      };

    case CHANGE_AGE_FIELD:
      return {
        ...state,
        age: action.value,
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

    default:
      return state;
  }
};

export default searchedAnimalsReducer;
