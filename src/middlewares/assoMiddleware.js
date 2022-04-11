import axios from 'axios';
import {
  FETCH_GEOLOC,
  formIssue,
  formSuccess,
} from '../actions/formActions';
import {
  POST_ASSO,
  saveFetchedLat,
  saveFetchedLgt,
} from '../actions/assoActions';

const assoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GEOLOC:
      // eslint-disable-next-line no-case-declarations
      const query = {
        street: action.streetQuery,
        zipCode: action.zipCodeQuery,
      };
      // eslint-disable-next-line prefer-template
      axios.get('https://api-adresse.data.gouv.fr/search/?q=' + query.street + '&postcode=' + query.zipCode, {})
        .then((response) => {
          // handle success
          console.log(response.data.features[0]);
          store.dispatch(saveFetchedLat(response.data.features[0].geometry.coordinates[1]));
          store.dispatch(saveFetchedLgt(response.data.features[0].geometry.coordinates[0]));
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
      break;

    case POST_ASSO:
      axios.post('http://localhost:8081/api/association/form', {
        name: store.getState().AssoReducer.name,
        description: store.getState().AssoReducer.description,
        siren: store.getState().AssoReducer.siren,
        street: store.getState().AssoReducer.street,
        zipCode: store.getState().AssoReducer.zipCode,
        city: store.getState().AssoReducer.city,
        phoneNumber: store.getState().AssoReducer.phoneNumber,
        email: store.getState().AssoReducer.email,
        latitude: store.getState().AssoReducer.latitude,
        longitude: store.getState().AssoReducer.longitude,
      })
        .then((response) => {
          // handle success
          console.log(response.data);
          store.dispatch(formSuccess());
        })
        .catch((error) => {
          // handle error
          console.log(error);
          store.dispatch(formIssue());
        });
      break;
    default:
  }
  next(action);
};

export default assoMiddleware;
