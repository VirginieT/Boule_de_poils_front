import { combineReducers } from 'redux';
import assoReducer from './assoReducer';
import formReducer from './formReducer';
import searchedAnimalsReducer from './searchedAnimals';
import registrationReducer from './registration';

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui gère cette partie du state
  SearchedAnimals: searchedAnimalsReducer,
  Registration: registrationReducer,
  FormReducer: formReducer,
  AssoReducer: assoReducer,
});

export default rootReducer;
