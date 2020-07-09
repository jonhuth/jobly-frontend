import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';

function ProfileForm({ currentUser }) {
  // const INITIAL_STATE = {
  //   first_name: '',
  //   last_name: '',
  //   email: '',
  //   photo_url: '',
  //   password: '',
  // };
  // const [formData, setFormData] = useState(INITIAL_STATE);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState('');

  useEffect(() => {
    async function getProfile() {
      let userData = await JoblyApi.getUser(currentUser.username);
      setFormData(userData);
    }
    getProfile();
  }, []);

  async function handleSubmit(evt) {
    evt.preventDefault();
    await JoblyApi.updateUser(formData);
    setFormData((prevFormData) => ({
      ...prevFormData,
      password: '',
    }));
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    // set new state for form data
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  if (!formData) {
    return null;
  }
  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={formData.first_name}
          name='first_name'
          placeholder='first_name'
          onChange={handleChange}
        />
        <input
          type='text'
          value={formData.last_name}
          name='last_name'
          placeholder='last_name'
          onChange={handleChange}
        />
        <input
          type='email'
          value={formData.email}
          name='email'
          placeholder='email'
          onChange={handleChange}
        />
        <input
          type='url'
          value={formData.photo_url}
          name='photo_url'
          placeholder='photo_url'
          onChange={handleChange}
        />
        <input
          type='password'
          value={formData.password}
          name='password'
          placeholder='password'
          onChange={handleChange}
        />
        <button>Save Changes</button>
      </form>
    </div>
  );
}

export default ProfileForm;
