import React from 'react';
import { NavLink } from "react-router-dom";

function Navigation({ token, logout }) {

  if (token) {
    return <div>
      {/* logged in */}
      <nav>
        <NavLink exact to="/">Jobly</NavLink>
        <NavLink exact to="/companies">Companies</NavLink>
        <NavLink exact to="/jobs">Jobs</NavLink>
        <NavLink exact to="/profile">Profile</NavLink>
        <NavLink exact to="/" ><span onClick={logout}>Logout</span></NavLink>
      </nav>
    </div>
        }
  return <div>
          {/* logged out */}
          <nav>
            <NavLink exact to="/">Jobly</NavLink>
            <NavLink exact to="/login">Login</NavLink>
          </nav>
        </div>
}

export default Navigation;