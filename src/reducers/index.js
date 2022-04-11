import { combineReducers } from 'redux';

import searchedAnimalsReducer from './searchedAnimals';
import carrouselReducer from './Carroussel';
import associationReducer from './association';

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui gère cette partie du state
  SearchedAnimals: searchedAnimalsReducer,
  Carroussel: carrouselReducer,
  Association: associationReducer,
});

export default rootReducer;
