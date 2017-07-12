import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './modules/sagas';
import reducer from '../reducers';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { routes } from 'modules/routes';
import App from './modules/main/containers';
import thunk from 'redux-thunk';
import { urls } from "./modules/urls";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware, routerMiddleware(hashHistory), thunk)
);
const history = syncHistoryWithStore(hashHistory, store);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path={urls.index} component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
