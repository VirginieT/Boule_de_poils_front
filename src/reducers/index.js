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
<<<<<<< HEAD
  Registration: registrationReducer,
=======
  AssoReducer: assoReducer,
>>>>>>> feature-addAssoForm
});

export default rootReducer;
