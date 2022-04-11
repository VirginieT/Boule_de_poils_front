export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHECK_EMPTY_FIELDS = 'CHECK_EMPTY_FIELDS';
export const EMPTY_ERRORS = 'EMPTY_ERRORS';
export const SUBMIT_REGISTRATION = 'SUBMIT_REGISTRATION';

export const changedFields = (name, value) => ({
  type: CHANGE_FIELD,
  fieldName: name,
  fieldValue: value,
});

export const checkEmptyFields = (nameSubscriptionField) => ({
  type: CHECK_EMPTY_FIELDS,
  fieldName: nameSubscriptionField,
});

export const emptyErrors = () => ({
  type: EMPTY_ERRORS,
});

export const submitRegistration = () => ({
  type: SUBMIT_REGISTRATION,
});
