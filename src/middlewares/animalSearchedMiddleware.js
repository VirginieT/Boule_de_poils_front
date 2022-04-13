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
        "status": store.getState().SearchedAnimals.status,
        "department": store.getState().SearchedAnimals.department,
      } )
        .then((response) => {
          // handle success
          console.log(response.data);
          response.data.length === 0 ? store.dispatch(saveFetchedAnimals('void')) : store.dispatch(saveFetchedAnimals(response.data));
        })
        .catch((error) => {
          // handle error
          console.log(error);
          store.dispatch(saveFetchedAnimals('error'));
        });

      break;
    default:
  }
  next(action);
};

export default animalSearchedMiddleware;
