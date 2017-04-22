import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/main/containers/index.ts';
import { Header } from "modules/header/containers";

export const urls = {
  index: '/',
  header: 'header'
};

export const routes = (
  <Route path={urls.index} component={App}>
    <Route path={urls.header} component={Header}></Route>
  </Route>
);
