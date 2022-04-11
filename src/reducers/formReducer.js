import {
  SAVE_DEPARTMENT,
  SAVE_SPECIES,
  SUBMIT_FORM,
  CHECK,
  UNCHECK,
  SPECIES_ERROR,
  AGE_ERROR,
  LOC_ERROR,
} from 'src/actions/formActions';

const initialState = {
  uploadedImg: null,
  departments: [],
  species: [],
  formSubmit: false,
  checked: false,
  speciesError: null,
  genderError: false,
  ageError: false,
  childError: false,
  othersError: false,
  gardenError: false,
  departmentError: false,
  checkboxError: false,
};

const formReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SPECIES_ERROR: {
      return {
        ...state,
        speciesError: action.value,
      };
    }

    case AGE_ERROR: {
      return {
        ...state,
        ageError: action.value,
      };
    }

    case LOC_ERROR: {
      return {
        ...state,
        departmentError: action.value,
      };
    }

    case CHECK: {
      return {
        ...state,
        checked: true,
      };
    }

    case UNCHECK: {
      return {
        ...state,
        checked: false,
      };
    }

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
