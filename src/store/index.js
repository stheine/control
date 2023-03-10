/* eslint-disable import/group-exports */
/* / eslint-disable no-constant-condition */

import {combineReducers}           from 'redux';
import {configureStore}            from '@reduxjs/toolkit';
import {createHashHistory}         from 'history';
import {createReduxHistoryContext} from 'redux-first-history';
// import {logger}                    from 'redux-logger';
import thunk                       from 'redux-thunk';

import * as reducers               from '../reducers/index.js';

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer,
} = createReduxHistoryContext({history: createHashHistory({
  // basename: '', ???
  // hashType: 'slash', ???
})});

const middleware = [
  routerMiddleware,
  thunk,
];

// if(false && process.env.NODE_ENV !== 'production') {
//   middleware.push(logger);
// }

export const store = configureStore({
  reducer: combineReducers({
    router: routerReducer,
    ...reducers,
  }),
  middleware,
});

export const history = createReduxHistory(store);
