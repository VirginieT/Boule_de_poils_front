import { combineReducers } from 'redux';

import searchedAnimalsReducer from './searchedAnimals';

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui gère cette partie du state
  SearchedAnimals: searchedAnimalsReducer,
});

export default rootReducer;
