import axios from 'axios';
import { FETCH_ANIMALS, saveFetchedAnimals } from '../actions/animalSearched';

const animalSearchedMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ANIMALS:
      axios.get('http://localhost:8081/api/animal', {}, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/Json',
        },
        species: store.getState().searchedAnimal.species,
        gender: store.getState().searchedAnimal.gender,
        age: store.getState().searchedAnimal.age,
        childCompatibility: store.getState().searchedAnimal.childCompatibility,
        otherAnimalCompatibility: store.getState().searchedAnimal.otherAnimalCompatibility,
        gardenNeeded: store.getState().searchedAnimal.gardenNeeded,
        department: store.getState().searchedAnimal.department,
      })
        .then((response) => {
          // handle success
          console.log(response.data);
          store.dispatch(saveFetchedAnimals(response.data));
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });

      break;
    default:
  }
  next(action);
};

export default animalSearchedMiddleware;
