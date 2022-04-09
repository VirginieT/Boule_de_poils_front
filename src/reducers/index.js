import { combineReducers } from 'redux';
import formReducer from './formReducer';

import searchedAnimalsReducer from './searchedAnimals';

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui gère cette partie du state
  SearchedAnimals: searchedAnimalsReducer,
  FormReducer: formReducer,
});

export default rootReducer;
