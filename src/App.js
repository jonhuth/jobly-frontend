import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Routes from './Routes';
import JoblyApi from './JoblyApi';

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState({ username: '' });
  const [token, setToken] = useState(localStorage.getItem('token'));

  // use effect with token as dependency
  // set or remove token based on current token state
  useEffect(() => {
    token
      ? localStorage.setItem('token', token)
      : localStorage.removeItem('token');
  }, [token]);

  function logout() {
    // set token and current user states back to default
    setToken(null);
    setCurrentUser({ username: '' });
    // localStorage.clear(); // alternative
    return null; //we don't want to redirect here; need to be in switch??
  }
  async function login(userObj) {
    // make api call to login user
    let token = await JoblyApi.login(userObj);
    // set token and current user states
    setToken(token);
    setCurrentUser({ username: userObj.username });
    // store token in localStorage
    return null;
  }
  async function signup(userObj) {
    // make api call to create user and login user
    let token = await JoblyApi.signup(userObj);
    // set token and current user states
    setToken(token);
    setCurrentUser({ username: userObj.username });
    // store token in localStorage
    return null;
  }
  return (
    <div className='App'>
      <BrowserRouter>
        <Navigation logout={logout} />
        <Routes login={login} signup={signup} />
      </BrowserRouter>
    </div>
  );
}

export default App;
