import { NEXT_PROFILE, PREVIOUS_PROFILE, DISPLAY_CONTACT } from 'src/actions/animalSearched';
import profilPictureDog from 'src/assets/images/pexels-helena-lopes.jpg';
import profilPictureCat from 'src/assets/images/pexels-lina-kivaka.jpg';

const initialState = {
  animalResults: [
    {
      id: 1,
      name: 'Truc',
      gender: 'female',
      picture: profilPictureDog,
      species_id: 'chien',
      age: 4,
      childCompatibility: true,
      otherAnimalCompatibility: false,
      gardenNeeded: true,
      status: 0,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, assumenda magni! Modi maxime quos, nemo fugit, inventore magni unde aliquam ipsum natus non sapiente eius eos vitae, sed neque quaerat. Dolorem numquam, atque rerum ea praesentium voluptates nemo illum vero!',
      associationName: 'un nom d\'assos',
    },
    {
      id: 2,
      name: 'Machin',
      gender: 'male',
      picture: profilPictureCat,
      species_id: 'chat',
      age: 7,
      childCompatibility: false,
      otherAnimalCompatibility: true,
      gardenNeeded: false,
      status: 1,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, assumenda magni! Modi maxime quos, nemo fugit, inventore magni unde aliquam ipsum natus non sapiente eius eos vitae, sed neque quaerat. Dolorem numquam, atque rerum ea praesentium voluptates nemo illum vero!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, assumenda magni! Modi maxime quos, nemo fugit, inventore magni unde aliquam ipsum natus non sapiente eius eos vitae, sed neque quaerat. Dolorem numquam, atque rerum ea praesentium voluptates nemo illum vero!',
      associationName: 'nom random',
    },
  ],
  displayProfile: 0,
  favorites: [],
  showContact: false,
};

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

    default:
      return state;
  }
};

export default searchedAnimalsReducer;
