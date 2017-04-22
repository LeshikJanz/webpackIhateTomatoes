import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './main/containers/index.ts';
import Header from "modules/header/containers";
import Base from "./main/components/Base/Base";
import { urls } from "./urls";

export const routes = (
    <Route path={urls.index} component={Base}>
      <IndexRoute component={App}></IndexRoute>
      <Route path={urls.header} component={Header}></Route>
    </Route>
);
