import React, { useState } from 'react';

function SearchForm({ searchFor }) {
  const [formData, setFormData] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    searchFor(formData);
  }

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label></label>
      <input
        value={formData}
        placeholder='Enter Search Term'
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default SearchForm;
