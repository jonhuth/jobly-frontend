import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Navigation from './Navigation';
import Routes from './Routes';

function App() {
  const [token, setToken] = useState('blah');
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation token={token} />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
