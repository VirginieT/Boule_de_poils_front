import axios from 'axios';
import { SUBMIT_REGISTRATION, registrationSucces } from '../actions/register';

const registrationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_REGISTRATION:
      // connection to API sending username, password and mail
      axios.post('/user', {
        mail: store.getState().Registration.email,
        username: store.getState().Registration.username,
        password: store.getState().Registration.password,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(registrationSucces(true));
        })
        .catch((error) => {
          console.log(error, 'on est ici dans le catch là');
          store.dispatch(registrationSucces(false));
        });
      break;

    default:
  }
  next(action);
};

export default registrationMiddleware;
