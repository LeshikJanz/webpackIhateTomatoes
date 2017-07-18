import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Board from "./Trello/containers/Board/Board";
import { LoginPageRoot } from "modules/Login/containers/LoginPageRoot";
import { urls } from "./urls";
import App from './main/containers';

/**
 * Routing between pages using React-Router-Redux
 *
 * See: https://github.com/reactjs/react-router-redux
 */
export default (
  <Route path={urls.index}>
    <IndexRoute component={App} />
    <Route path={urls.board} component={Board}></Route>
    <Route path={urls.login} component={LoginPageRoot}></Route>
  </Route>
);