import { combineReducers } from 'redux';

import searchedAnimalsReducer from './searchedAnimals';
import subscriptionReducer from './subscription';

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui gère cette partie du state
  SearchedAnimals: searchedAnimalsReducer,
  Subscription: subscriptionReducer,
});

export default rootReducer;
