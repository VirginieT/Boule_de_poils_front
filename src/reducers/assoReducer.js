import {
  CHANGE_NAME_FIELD,
  CHANGE_DESCRIPTION_FIELD,
  CHANGE_SIREN_FIELD,
  CHANGE_STREET_FIELD,
  CHANGE_ZIPCODE_FIELD,
  CHANGE_CITY_FIELD,
  CHANGE_PHONENUMBER_FIELD,
  CHANGE_EMAIL_FIELD,
} from 'src/actions/formActions';

import {
  SAVE_LAT,
  SAVE_LGT,
} from 'src/actions/assoActions';

const initialState = {
  name: '',
  description: '',
  siren: '',
  street: '',
  zipCode: '',
  city: '',
  phoneNumber: '',
  email: '',
  latitude: '',
  longitude: '',
};

const assoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_NAME_FIELD:
      return {
        ...state,
        name: action.value,
      };

    case CHANGE_DESCRIPTION_FIELD:
      return {
        ...state,
        description: action.value,
      };

    case CHANGE_SIREN_FIELD:
      return {
        ...state,
        siren: action.value,
      };

    case CHANGE_STREET_FIELD:
      return {
        ...state,
        street: action.value,
      };

    case CHANGE_ZIPCODE_FIELD:
      return {
        ...state,
        zipCode: action.value,
      };

    case CHANGE_CITY_FIELD:
      return {
        ...state,
        city: action.value,
      };

    case CHANGE_PHONENUMBER_FIELD:
      return {
        ...state,
        phoneNumber: action.value,
      };

    case CHANGE_EMAIL_FIELD:
      return {
        ...state,
        email: action.value,
      };

    case SAVE_LAT: {
      return {
        ...state,
        latitude: action.datas,
      };
    }

    case SAVE_LGT: {
      return {
        ...state,
        longitude: action.datas,
      };
    }

    default:
      return state;
  }
};

export default assoReducer;
