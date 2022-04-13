import { combineReducers } from 'redux';


import loginReducer from './login';
import assoReducer from './assoReducer';
import formReducer from './formReducer';
import searchedAnimalsReducer from './searchedAnimals';
import registrationReducer from './registration';

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui gère cette partie du state
  SearchedAnimals: searchedAnimalsReducer,
  Registration: registrationReducer,
  FormReducer: formReducer,
  Login: loginReducer,
  AssoReducer: assoReducer,

});

export default rootReducer;
