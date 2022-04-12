import axios from 'axios';
import { SUBMIT_LOGIN, loginSucces } from '../actions/login';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      console.log(
        {
          username: store.getState().Login.emailLogin,
          password: store.getState().Login.passwordLogin,
        },
        action.type,
      );
      axios.post('http://localhost:8081/api/login_check', {
        username: store.getState().Login.emailLogin,
        password: store.getState().Login.passwordLogin,
      })
        .then((response) => {
          console.log(response.data.token);
          store.dispatch(loginSucces(response.data.token));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }

  next(action);
};
export default loginMiddleware;
