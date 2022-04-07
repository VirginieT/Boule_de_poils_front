import axios from 'axios';
import { FETCH_ANIMALS, saveFetchedAnimals, POST_ANIMAL } from '../actions/animalSearched';

const animalSearchedMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ANIMALS:
      axios.get('http://localhost:8081/api/animal', {}, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/Json',
        },
        species: store.getState().SearchedAnimals.species,
        gender: store.getState().SearchedAnimals.gender,
        age: store.getState().SearchedAnimals.age,
        childCompatibility: store.getState().SearchedAnimals.childCompatibility,
        otherAnimalCompatibility: store.getState().SearchedAnimals.otherAnimalCompatibility,
        gardenNeeded: store.getState().SearchedAnimals.gardenNeeded,
        department: store.getState().SearchedAnimals.department,
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

      case POST_ANIMAL:
      axios.get('http://localhost:8081/api/animal', {}, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/Json',
        },
        name: store.getState().SearchedAnimals.name,
        species: store.getState().SearchedAnimals.species,
        gender: store.getState().SearchedAnimals.gender,
        picture: store.getState().SearchedAnimals.picture,
        age: store.getState().SearchedAnimals.age,
        description: store.getState().SearchedAnimals.description,
        childCompatibility: store.getState().SearchedAnimals.childCompatibility,
        otherAnimalCompatibility: store.getState().SearchedAnimals.otherAnimalCompatibility,
        gardenNeeded: store.getState().SearchedAnimals.gardenNeeded,
        department: store.getState().SearchedAnimals.department,
      })
        .then((response) => {
          // handle success
          console.log(response.data);
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
