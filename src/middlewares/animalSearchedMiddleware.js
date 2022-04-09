import axios from 'axios';
import { FETCH_ANIMALS, saveFetchedAnimals } from '../actions/animalSearched';

const animalSearchedMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ANIMALS:
      axios.post('http://localhost:8081/api/animal/form', {
        "species": store.getState().SearchedAnimals.species,
        "gender": store.getState().SearchedAnimals.gender,
        "age": store.getState().SearchedAnimals.age,
        "childCompatibility": store.getState().SearchedAnimals.childCompatibility,
        "other_animal_compatibility": store.getState().SearchedAnimals.otherAnimalCompatibility,
        "garden_needed": store.getState().SearchedAnimals.gardenNeeded,
        "status": 1,
        "department": store.getState().SearchedAnimals.department, 
      } )
        .then((response) => {
          // handle success
          console.log(response.data);
          store.dispatch(saveFetchedAnimals(response.data));
          response.data.length === 0 ? console.log('y a rien mec !') : console.log(response.data);
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
