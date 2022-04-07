export const CHANGE_FIELD = 'CHANGE_FIELD';

export const changedFields = (name, value) => ({
  type: CHANGE_FIELD,
  fieldName: name,
  fieldValue: value,
});
