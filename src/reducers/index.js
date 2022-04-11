import { combineReducers } from 'redux';

import searchedAnimalsReducer from './searchedAnimals';
import registrationReducer from './registration';

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui gère cette partie du state
  SearchedAnimals: searchedAnimalsReducer,
  Registration: registrationReducer,
});

export default rootReducer;
