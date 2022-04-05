import { NEXT_PROFILE } from 'src/actions/animalSearched';
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
    },
  ],
  // currentProfil: {
  //   id: 1,
  //   name: 'Truc',
  //   gender: 'female',
  //   picture: profilPictureDog,
  //   species_id: 'chien',
  //   age: 4,
  //   child_compatibility: true,
  //   other_animal_compatibility: false,
  //   garden_needed: false,
  //   status: 0,
  //   description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  //   Asperiores, assumenda magni! Modi maxime quos, nemo fugit, inventore magni
  //   unde aliquam ipsum natus non sapiente eius eos vitae, sed neque quaerat.
  //   Dolorem numquam, atque rerum ea praesentium voluptates nemo illum vero!',
  // },
  favorites: [],
};

const searchedAnimalsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEXT_PROFILE:
      console.log('bon déjà est-ce qu\'on arrive là ??!!');
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default searchedAnimalsReducer;
