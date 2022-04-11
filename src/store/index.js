import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import animalSearchedMiddleware from '../middlewares/animalSearchedMiddleware';

import carrousselMiddleware from '../middlewares/carrousselMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(animalSearchedMiddleware, carrousselMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
