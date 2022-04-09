import {
  SAVE_DEPARTMENT,
  SAVE_SPECIES,
  SUBMIT_FORM,
} from 'src/actions/formActions';

const initialState = {
  departments: [],
  species: [],
  formSubmit: false,
};

const formReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_FORM: {
      return {
        ...state,
        formSubmit: true,
      };
    }

    case SAVE_DEPARTMENT: {
      return {
        ...state,
        departments: action.datas,
      };
    }

    case SAVE_SPECIES: {
      return {
        ...state,
        species: action.datas,
      };
    }

    default:
      return state;
  }
};

export default formReducer;
