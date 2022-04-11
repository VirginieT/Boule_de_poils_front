import {
  NEXT_PROFILE,
  PREVIOUS_PROFILE,
  DISPLAY_CONTACT,
  SAVE_ANIMALS,
} from 'src/actions/animalSearched';

const initialState = {
  animalResults: [],
  displayProfile: 0,
  favorites: [],
  showContact: false,
};
// ternaire : x === 3 ? traitement si true : traitement si false.

const searchedAnimalsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
