import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import datasets from './reducers/datasets';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    datasets,
  }),
  composeEnhancers(
    applyMiddleware(thunk)
  )
);
export default store;
