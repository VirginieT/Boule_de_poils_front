// reducer for subscription
import { CHANGE_FIELD } from 'src/actions/subscribe';

const initialState = {
  email: '',
  password: '',
  username: '',
};

const subscription = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      if (action.fieldName === 'username') {
        return {
          ...state,
          username: action.fieldValue,
        };
      }
      if (action.fieldName === 'password') {
        return {
          ...state,
          password: action.fieldValue,
        };
      }

      return {
        ...state,
        email: action.fieldValue,
      };
    }
    default:
      return state;
  }
};

export default subscription;
