import { combineReducers } from 'redux';

import formReducer from './formReducer';
import searchedAnimalsReducer from './searchedAnimals';
import registrationReducer from './registration';
import loginReducer from './login';

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui gère cette partie du state
  SearchedAnimals: searchedAnimalsReducer,
  FormReducer: formReducer,
  Registration: registrationReducer,
  Login: loginReducer,
});

export default rootReducer;
