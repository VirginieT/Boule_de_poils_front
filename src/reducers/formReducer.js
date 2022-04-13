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
  FORM_SUCCESS,
  FORM_ISSUE,
  NAME_ERROR,
  DESCRIPTION_ERROR,
  SIREN_ERROR,
  STREET_ERROR,
  ZIPCODE_ERROR,
  CITY_ERROR,
  PHONENUMBER_ERROR,
  EMAIL_ERROR,
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
  nameError: true,
  descriptionError: false,
  sirenError: false,
  streetError: false,
  zipCodeError: false,
  cityError: false,
  phoneNumberError: false,
  emailError: false,
  formResult: null,
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

    case FORM_SUCCESS: {
      return {
        ...state,
        formResult: true,
      };
    }

    case FORM_ISSUE: {
      return {
        ...state,
        formResult: false,
      };
    }

    case NAME_ERROR: {
      return {
        ...state,
        nameError: action.value,
      };
    }

    case DESCRIPTION_ERROR: {
      return {
        ...state,
        descriptionError: action.value,
      };
    }

    case SIREN_ERROR: {
      return {
        ...state,
        sirenError: action.value,
      };
    }

    case STREET_ERROR: {
      return {
        ...state,
        streetError: action.value,
      };
    }

    case ZIPCODE_ERROR: {
      return {
        ...state,
        zipCodeError: action.value,
      };
    }

    case CITY_ERROR: {
      return {
        ...state,
        cityError: action.value,
      };
    }

    case PHONENUMBER_ERROR: {
      return {
        ...state,
        phoneNumberError: action.value,
      };
    }

    case EMAIL_ERROR: {
      return {
        ...state,
        emailError: action.value,
      };
    }

    default:
      return state;
  }
};

export default formReducer;
