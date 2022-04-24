// test file for animals reducer
import searchedAnimalsReducer from "src/reducers/searchedAnimals";

// action types import to define actions for testing
import {
  NEXT_PROFILE,
  PREVIOUS_PROFILE,
  DISPLAY_CONTACT,
  SAVE_ANIMALS,
  EMPTY_ANIMAL_RESULTS,
} from 'src/actions/animalSearched';
import {
  CHANGE_AGE_FIELD,
  CHANGE_GENDER_FIELD,
  CHANGE_SPECIES_FIELD,
  CHANGE_CHILD_FIELD,
  CHANGE_OTHERS_FIELD,
  CHANGE_GARDEN_FIELD,
  CHANGE_LOC_FIELD,
  CHANGE_STATUS_FIELD,
} from 'src/actions/formActions';

// animals datas

describe('animal reducer', () => {
  describe('structure', () => {
    // verify if the type is function
    test('should be a function', () => {
      expect(typeof searchedAnimalsReducer).toBe('function');
    })
  })

  describe('usage', () => {
    test('initial state', () => {
      const expectedInitialState = {
        species: 999,
        gender: 2,
        age: 4,
        childCompatibility: 0,
        otherAnimalCompatibility: 0,
        gardenNeeded: 0,
        status: 0,
        department: 0,
        animalResults: [],
        displayProfile: 0,
        favorites: [],
        showContact: false,
        formSubmit: false,
      };
      expect(searchedAnimalsReducer(undefined, {})).toEqual(expectedInitialState);
    })
    test('check treatment of action CHANGE_STATUS_FIELD', () => {
      const stateBefore = {
        status: 0,
      };
      const action = {
        type: CHANGE_STATUS_FIELD,
        status: 1,
      };
      const expectedStateAfter = {
        status: 1,
      };
      const actualStateAfter = searchedAnimalsReducer(stateBefore, action);
      expect(actualStateAfter).toEqual(expectedStateAfter);
    })
    test('check treatment of action CHANGE_SPECIES_FIELD', () => {
      const stateBefore = {
        species: 999 ,
      };
      const action = {
        type: CHANGE_SPECIES_FIELD,
        species: 1,
      };
      const expectedStateAfter = {
        species: 1,
      };
      const actualStateAfter = searchedAnimalsReducer(stateBefore, action);
      expect(actualStateAfter).toEqual(expectedStateAfter);
    })
  })
})
