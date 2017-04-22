import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/main/containers/index.ts';
import Header from "modules/header/containers";
import Base from "./modules/main/components/Base/Base";

export const urls = {
  index: '/',
  header: 'header',
};

export const routes = (
    <Route path={urls.index} component={Base}>
      <IndexRoute component={App}></IndexRoute>
      <Route path={urls.header} component={Header}></Route>
    </Route>
);
