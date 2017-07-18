import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Header from "./header/components/index";
import Base from "./main/containers/index";
import Board from "modules/Trello/containers/Board/Board";
import { LoginPageRoot } from "modules/Login/containers/LoginPageRoot";

export const routes = () => (
  <Route path={urls.index} component={Base}>
    <IndexRoute component={App}></IndexRoute>
    <Route path={urls.header} component={Header}></Route>
    <Route path={urls.board} component={Board}></Route>
    <Route path={urls.login} component={LoginPageRoot}></Route>
  </Route>
);