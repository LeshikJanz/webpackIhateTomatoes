import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CloudBoard from "./Board/containers/Board/CloudBoard";
import OldBoard from "./WorkingTrello/containers/Board/Board";
import { LoginPageRoot } from "modules/Login/containers/LoginPageRoot";
import { urls } from "./urls";
import App from './main/containers';
import Header from './header/containers';

/**
 * Routing between pages using React-Router-Redux
 *
 * See: https://github.com/reactjs/react-router-redux
 */
export default (
  <Route path={urls.index} component={Header} >
    <IndexRoute/>
    <Route path={urls.cloud + `/:id`} component={App}></Route>
    <Route path={urls.oldBoard} component={OldBoard}></Route>
    <Route path={urls.cloudBoard} component={CloudBoard}></Route>
    <Route path={urls.login} component={LoginPageRoot}></Route>
  </Route>
);