import React, { useState } from 'react';

function LoginSignup({ signup, login }) {
  const INITIAL_STATE = {
    username: "", password: "",
    first_name: "", last_name: "", email: ""
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState('');
  const [isExistingUser, setIsExistingUser] = useState(true);

  function handleSubmit(evt) {
    evt.preventDefault();
    // if existing user, log them in; otherwise, sign up
    isExistingUser ? login(formData) : signup(formData);
    setFormData(INITIAL_STATE);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    // set new state for form data
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  return (
    <div>
      <button onClick={() => setIsExistingUser(true)}>Login</button>
      <button onClick={() => setIsExistingUser(false)}>Sign Up</button>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.username}
          name='username'
          placeholder='username'
          onChange={handleChange}
        />
        <input
          type='password'
          value={formData.password}
          name='password'
          placeholder='password'
          onChange={handleChange}
        />
        {!isExistingUser &&
          (<>
            <input
              value={formData.first_name}
              name='first_name'
              placeholder='first name'
              onChange={handleChange}
            />
            <input
              value={formData.last_name}
              name='last_name'
              placeholder='last name'
              onChange={handleChange}
            />
            <input
              value={formData.email}
              name='email'
              placeholder='email'
              onChange={handleChange}
            />
          </>)
        }
        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginSignup;
