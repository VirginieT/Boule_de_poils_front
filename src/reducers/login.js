import {
  CHANGE_FIELD,
} from 'src/actions/register';

import { LOGIN_SUCCES } from 'src/actions/login';

const initialState = {
  emailLogin: '',
  passwordLogin: '',
  tokenUserConnected: null,
};

const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      if (action.fieldName === 'email-login') {
        return {
          ...state,
          emailLogin: action.fieldValue,
        };
      }
      if (action.fieldName === 'password-login') {
        return {
          ...state,
          passwordLogin: action.fieldValue,
        };
      }
      return {
        ...state,
      };

    case LOGIN_SUCCES:
      return {
        ...state,
        tokenUserConnected: action.tokenReceived,
      };

    default:
      return {
        ...state,
      };
  }
};

export default loginReducer;
