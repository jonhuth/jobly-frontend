import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import LoginSignup from './LoginSignup';
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';

function Routes({ login, signup }) {
  const token = localStorage.getItem('token');
  return (
    <Switch>
      <Route exact path='/companies/:company'>
        {token ? <CompanyDetail /> : <Redirect to='/login' />}
      </Route>
      <Route exact path='/companies'>
        {token ? <CompanyList /> : <Redirect to='/login' />}
      </Route>
      <Route exact path='/jobs'>
        {token ? <JobList /> : <Redirect to='/login' />}
      </Route>
      <Route exact path='/login'>
        {token ? (
          <Redirect to='/' />
        ) : (
          <LoginSignup login={login} signup={signup} />
        )}
      </Route>
      <Route exact path='/profile'>
        {token ? <ProfileForm /> : <Redirect to='/login' />}
      </Route>
      <Route exact path='/'>
        <Homepage />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
}

export default Routes;
