import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import animalSearchedMiddleware from '../middlewares/animalSearchedMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(animalSearchedMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
