import React from 'react';
import { Route } from 'react-router-dom';
import MasterPage from '../components/layout/masterPage/masterPage';
import HomeRoute from './Home/Home';
import EditUserRouter from './Users/Edit';
import UsersRoute from './Users/Users';

export const Routes = () => {
  return (
    <MasterPage>
      <Route exact={true} path="/" component={HomeRoute} />
      <Route exact={true} path="/users" component={UsersRoute} />
      <Route exact={true} path="/users/:id" component={EditUserRouter} />
    </MasterPage>
  );
};
