import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CloudBoard from "./Board/containers/Board/CloudBoard";
import Board from "../../workingTrello/containers/Board/Board";
import { urls } from "./urls";
import Cloud from './Cloud/containers';
import Header from './Main/header/containers';
import { PageNotFound } from '../components/pageNotFound';
import { Main } from './Main';
import Registration from './Registration/containers/Registration';

/**
 * Routing between pages using React-Router-Redux
 *
 * See: https://github.com/reactjs/react-router-redux
 */
export default (
  <Route path={urls.index} component={Header}>
    <IndexRoute component={Main}/>
    <Route path={urls.cloud + `/:id`} component={Cloud}></Route>
    <Route path={urls.board} component={CloudBoard}></Route>
    <Route path={urls.trello} component={Board}></Route>
    <Route path={urls.registration} component={Registration}></Route>
    <Route path='*' component={PageNotFound}/>
  </Route>
);