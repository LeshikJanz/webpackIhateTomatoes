import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CloudBoard from "./Board/containers/Board/CloudBoard";
import { LoginPageRoot } from "./Login-Old/containers/LoginPageRoot";
import Board from "../../workingTrello/containers/Board/Board";
import { urls } from "./urls";
import Cloud from './Cloud/containers';
import Header from './Main/components/header/containers';

/**
 * Routing between pages using React-Router-Redux
 *
 * See: https://github.com/reactjs/react-router-redux
 */
export default (
  <Route path={urls.index} component={Header}>
    <IndexRoute/>
    <Route path={urls.cloud + `/:id`} component={Cloud}></Route>
    <Route path={urls.board} component={CloudBoard}></Route>
    <Route path={urls.login} component={LoginPageRoot}></Route>
    <Route path={urls.trello} component={Board}></Route>
  </Route>
);