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
