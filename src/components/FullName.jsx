import React, { useState } from 'react';

export default function FullName() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');
    const [bothFieldsFilled, setBothFieldsFilled] = useState(false);
  
    const handleFirstNameChange = (event) => {
      setFirstName(event.target.value);
      setBothFieldsFilled(event.target.value && lastName);
    };
  
    const handleLastNameChange = (event) => {
      setLastName(event.target.value);
      setBothFieldsFilled(firstName && event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (bothFieldsFilled) {
        setFullName(`${firstName} ${lastName}`);
      } else {
        setFullName('');
      }
    };
  
    return (
      <div>
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={handleFirstNameChange} required />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={handleLastNameChange} required />
          </label>
          <br />
          <button type="submit" disabled={!bothFieldsFilled}>Submit</button>
        </form>
        {fullName && <p>Full Name: {fullName}</p>}
      </div>
    );

}

