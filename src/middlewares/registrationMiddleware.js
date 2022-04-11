import axios from 'axios';
import { SUBMIT_REGISTRATION } from '../actions/register';

const registrationMiddleware = (store) => (next) => (action) => {
  console.log(action, store);
  switch (action.type) {
    case SUBMIT_REGISTRATION:

      // connection to API sending username, password and mail
      break;

    default:
  }
  next(action);
};

export default registrationMiddleware;
