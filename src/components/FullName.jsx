import React, { useState } from 'react';

export default function FullName() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" required value={firstName} onChange={handleFirstNameChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" required value={lastName} onChange={handleLastNameChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>Full Name: {fullName}</p>
    </div>
  );
}

