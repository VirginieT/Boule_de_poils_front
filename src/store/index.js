import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import animalSearchedMiddleware from '../middlewares/animalSearchedMiddleware';
import assoMiddleware from '../middlewares/assoMiddleware';
import formMiddleware from '../middlewares/formMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(animalSearchedMiddleware, formMiddleware, assoMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
