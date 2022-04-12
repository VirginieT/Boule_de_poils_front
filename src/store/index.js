import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import animalSearchedMiddleware from '../middlewares/animalSearchedMiddleware';
import formMiddleware from '../middlewares/formMiddleware';
import registrationMiddleware from '../middlewares/registrationMiddleware';
import loginMiddleware from '../middlewares/loginMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    animalSearchedMiddleware,
    formMiddleware,
    registrationMiddleware,
    loginMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
