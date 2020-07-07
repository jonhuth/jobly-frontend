import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import LoginSignup from './LoginSignup';
// import LoginForm from './LoginForm'; 
// import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';

function Routes() {
  return (
    <Switch>
      <Route exact path="/companies/:company">
        <CompanyDetail />
      </Route>
      <Route exact path="/companies">
        <CompanyList />
      </Route>
      <Route exact path="/jobs">
        <JobList />
      </Route>
      <Route exact path="/login">
        <LoginSignup />
      </Route>
      <Route exact path="/profile">
        <ProfileForm />
      </Route>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Redirect to="/" />
    </Switch>

  )
}

export default Routes;


