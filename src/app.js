import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './modules/sagas';
import reducer from '../reducers';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import routes from './modules/routes';
import thunk from 'redux-thunk';
import 'react-notifications/lib/notifications.css';
require('./app.scss');
require('./styles/animations.scss');
import 'react-select/dist/react-select.css';
import { NotificationContainer } from 'react-notifications';

/**
 * Saga Middleware for Redux to Handle Side Effects
 *
 * See: https://github.com/redux-saga/redux-saga
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * Redux store. Predictable state container for JavaScript apps
 *
 * See: https://github.com/reactjs/redux
 *
 * @param {ReducersMapObject} reducer - parent reducer combined all reducer in one
 * @param {StoreEnhancer} REDUX_DEVTOOLS_EXTENSION - plugin for debugging in Browser
 * @param {StoreEnhancer} sagaMiddleware - plugin for connecting Redux saga and store
 * @param {Middleware} thunk - middleware allows to write action creators that return a function instead of an action
 *
 * @returns {StoreCreator} store - Redux store
 */
const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware, routerMiddleware(hashHistory), thunk)
);

/**
 * Sync router history with Redux Saga
 *
 * @param {any} hashHistory - router hash history
 * @param {StoreCreator} store - Redux store
 *
 * @returns {any} history - history
 */
const history = syncHistoryWithStore(hashHistory, store);

/**
 * Run Saga middleware
 *
 * @param {any} rootSaga - parent saga combined all sagas in one
 *
 * @returns {void}
 */
sagaMiddleware.run(rootSaga);

/**
 * Renders the component
 *
 * @return {string} - HTML markup for the component
 */
ReactDOM.render(
  <Provider store={store}>
    <div style={{ height: '100%' }}>
      <Router history={history} routes={routes}/>
      <NotificationContainer/>
    </div>
  </Provider>,
  document.getElementById('root')
);
