// reducer for subscription
import { CHANGE_FIELD, CHECK_EMPTY_FIELDS, EMPTY_ERRORS } from 'src/actions/subscribe';

const initialState = {
  email: '',
  password: '',
  username: '',
  submitted: false,
  errors: [],
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
    case EMPTY_ERRORS: {
      return {
        ...state,
        errors: [],
      };
    }
    case CHECK_EMPTY_FIELDS: {
      const copyState = { ...state };
      if (action.fieldName === 'mail') {
        return {
          ...copyState,
          errors: [...copyState.errors,
            {
              id: 'mail',
              message: 'le champ email n\'est pas renseigné',
            }],
        };
      }
      if (action.fieldName === 'username') {
        return {
          ...copyState,
          errors: [...copyState.errors,
            {
              id: 'username',
              message: 'le champ username n\'est pas renseigné',
            }],
        };
      }
      return {
        ...copyState,
        errors: [...copyState.errors,
          {
            id: 'password',
            message: 'le champ password n\'est pas renseigné',
          }],
      };
    }
    default:
      return state;
  }
};

export default subscription;
