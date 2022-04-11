import axios from 'axios';
import {
  FETCH_GEOLOC,
} from '../actions/formActions';
import {
  saveFetchedLat,
  saveFetchedLgt,
} from '../actions/assoActions';

const assoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GEOLOC:
      axios.get('https://api-adresse.data.gouv./search/?q=8+bd+du+port&postcode=44380', {})
        .then((response) => {
          // handle success
          console.log(response.data.features[0].geometry.coordinates[0]);
          store.dispatch(saveFetchedLat(response.data.features[0].geometry.coordinates[1]));
          store.dispatch(saveFetchedLgt(response.data.features[0].geometry.coordinates[0]));
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

export default assoMiddleware;
