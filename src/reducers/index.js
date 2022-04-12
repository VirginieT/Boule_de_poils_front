import { combineReducers } from 'redux';
import formReducer from './formReducer';
import searchedAnimalsReducer from './searchedAnimals';
import registrationReducer from './registration';

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui gère cette partie du state
  SearchedAnimals: searchedAnimalsReducer,
  Registration: registrationReducer,
  FormReducer: formReducer,
  Registration: registrationReducer,
});

export default rootReducer;
