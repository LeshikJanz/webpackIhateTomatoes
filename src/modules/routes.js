import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { urls } from "urls";
import Cloud from './Cloud/containers';
import Header from './Main/header/containers';
import { PageNotFound } from '../components/PageNotFound/index';
import { Main, Base } from './Main/index';
import Registration from './Registration/containers/Registration';
import UserList from './Users/containers/UserList';
import Tree from './Tree/components/reviewersTree';
import GridLayout from './Sky/containers';
import Login from './Login/containers';
import Profile from './Profile/containers';
import Research from './Research/containers';
import Settings from './Settings/containers';

/**
 * Routing between pages using React-Router-Redux
 *
 * See: https://github.com/reactjs/react-router-redux
 */
export default (
  <Route component={Base}>
    <IndexRoute component={Main}/>
    <Route path={urls.login} component={Login}></Route>
    <Route path={urls.cloud + `/:id`} component={Cloud}></Route>
    <Route path={urls.user + `/:id/` + urls.board} component={GridLayout}></Route>
    <Route path={urls.board} component={GridLayout}></Route>
    <Route path={urls.registration} component={Registration}></Route>
    <Route path={urls.users} component={UserList}></Route>
    <Route path={urls.profile + `/:id`} component={Profile}></Route>
    <Route path={urls.test} component={Tree}></Route>
    <Route path={urls.research} component={Research}></Route>
    <Route path={urls.settings} component={Settings}></Route>
    <Route path='*' component={PageNotFound}/>
  </Route>
);