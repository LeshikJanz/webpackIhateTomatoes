import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './main/containers/index.ts';
import Header from "modules/header/containers";
import Base from "./main/components/Base/Base";
import Board from "modules/Trello/containers/Board/Board";
import Login from "modules/Login/containers";
import { urls } from "./urls";

export const routes = (
    <Route path={urls.index} component={Base}>
      <IndexRoute component={App}></IndexRoute>
      <Route path={urls.header} component={Header}></Route>
      <Route path={urls.board} component={Board}></Route>
      <Route path={urls.login} component={Login}></Route>
    </Route>
);
