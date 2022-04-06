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
      child_compatibility: true,
      other_animal_compatibility: false,
      garden_needed: true,
      status: 0,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, assumenda magni! Modi maxime quos, nemo fugit, inventore magni unde aliquam ipsum natus non sapiente eius eos vitae, sed neque quaerat. Dolorem numquam, atque rerum ea praesentium voluptates nemo illum vero!',
      association: {
        associationName: '1000moustaches',
        associationLocalisation: {
          address: '1rue nfjehfkjr',
          zip_code: '45678',
          city: 'Une ville',
        },
        associationPhone: '06567997665',
        associationEmail: 'unmail.unmail@gmonmail.com',
      },
    },
    {
      id: 2,
      name: 'Machin',
      gender: 'male',
      picture: profilPictureCat,
      species_id: 'chat',
      age: 7,
      child_compatibility: false,
      other_animal_compatibility: true,
      garden_needed: false,
      status: 1,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, assumenda magni! Modi maxime quos, nemo fugit, inventore magni unde aliquam ipsum natus non sapiente eius eos vitae, sed neque quaerat. Dolorem numquam, atque rerum ea praesentium voluptates nemo illum vero!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, assumenda magni! Modi maxime quos, nemo fugit, inventore magni unde aliquam ipsum natus non sapiente eius eos vitae, sed neque quaerat. Dolorem numquam, atque rerum ea praesentium voluptates nemo illum vero!',
      association: {
        associationName: 'fhusgfujs',
        associationLocalisation: {
          address: '1rue hahahahhaha',
          zip_code: '90456',
          city: 'Une villllllllle machin',
        },
        associationPhone: '06111111111',
        associationEmail: 'mail.mial@gmonmail.com',
      },
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

      return newState;
    }

    case PREVIOUS_PROFILE: {
      const newState = { ...state };

      const minIndex = newState.displayProfile - 1 < 0
        ? newState.displayProfile = newState.animalResults.length - 1
        : newState.displayProfile - 1;

      newState.displayProfile = minIndex;
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
