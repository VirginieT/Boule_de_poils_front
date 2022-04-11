import axios from 'axios';
import { SUBMIT_REGISTRATION, registrationSucces } from '../actions/register';

const registrationMiddleware = (store) => (next) => (action) => {
  console.log(store);
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
          store.dispatch(registrationSucces());
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }
  next(action);
};

export default registrationMiddleware;
