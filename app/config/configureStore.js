import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import reducer from '../redux/reducers';

/* eslint global-require: 0 */
let composeEnhancers = compose;
/* eslint-disable no-undef */
if (__DEV__) {
  // Use it if Remote debugging with RNDebugger, otherwise use remote-redux-devtools
  /* eslint-disable no-underscore-dangle */
  composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    require('remote-redux-devtools').composeWithDevTools)({
    name: Platform.OS,
    ...require('../../package.json').remotedev
  });
  /* eslint-enable no-underscore-dangle */
}

const middleware = __DEV__
  ? [thunk, createLogger({collapsed: true})]
  : [thunk]

const enhancer = composeEnhancers(applyMiddleware(...middleware));

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('../redux/reducers').default);
    });
  }
  return store;
}
