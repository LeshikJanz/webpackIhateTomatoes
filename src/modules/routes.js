import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CloudBoard from "./Board/containers/Board/CloudBoard";
import { urls } from "./urls";
import Cloud from './Cloud/containers';
import Header from './Main/header/containers';
import { PageNotFound } from '../components/pageNotFound';
import { Main, Base } from './Main';
import Registration from './Registration/containers/Registration';
import UserList from './Users/containers/UserList';
import Tree from './Tree/components/reviewersTree';

/**
 * Routing between pages using React-Router-Redux
 *
 * See: https://github.com/reactjs/react-router-redux
 */
export default (
  <Route path={urls.index} component={Header}>
    <Route component={Base}>
      <IndexRoute component={Main}/>
      <Route path={urls.cloud + `/:id`} component={Cloud}></Route>
      <Route path={urls.user + `/:id/` + urls.board} component={CloudBoard}></Route>
      <Route path={urls.board} component={CloudBoard}></Route>
      <Route path={urls.registration} component={Registration}></Route>
      <Route path={urls.users} component={UserList}></Route>
      <Route path={urls.test} component={Tree}></Route>
      <Route path='*' component={PageNotFound}/>
    </Route>
  </Route>
);