import {
  SAVE_DEPARTMENT,
  SAVE_SPECIES,
  SUBMIT_FORM,
  CHILD_CHECK,
  CHILD_UNCHECK,
  OTHERS_CHECK,
  OTHERS_UNCHECK,
  GARDEN_CHECK,
  GARDEN_UNCHECK,
  AVAILABLE_CHECK,
  AVAILABLE_UNCHECK,
  SPECIES_ERROR,
  AGE_ERROR,
  LOC_ERROR,
} from 'src/actions/formActions';

const initialState = {
  departments: [],
  species: [],
  formSubmit: false,
  childChecked: false,
  othersChecked: false,
  gardenChecked: false,
  availableChecked: false,
  speciesError: true,
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

    case CHILD_CHECK: {
      return {
        ...state,
        childChecked: true,
      };
    }

    case CHILD_UNCHECK: {
      return {
        ...state,
        childChecked: false,
      };
    }

    case OTHERS_CHECK: {
      return {
        ...state,
        othersChecked: true,
      };
    }

    case OTHERS_UNCHECK: {
      return {
        ...state,
        othersChecked: false,
      };
    }

    case GARDEN_CHECK: {
      return {
        ...state,
        gardenChecked: true,
      };
    }

    case GARDEN_UNCHECK: {
      return {
        ...state,
        gardenChecked: false,
      };
    }

    case AVAILABLE_CHECK: {
      return {
        ...state,
        availableChecked: true,
      };
    }

    case AVAILABLE_UNCHECK: {
      return {
        ...state,
        availableChecked: false,
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
