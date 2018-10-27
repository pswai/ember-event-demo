/* eslint-disable no-underscore-dangle */

import { createStore } from 'redux';
import reducer from './duck';

const configureStore = initialState => {
  const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default configureStore;
