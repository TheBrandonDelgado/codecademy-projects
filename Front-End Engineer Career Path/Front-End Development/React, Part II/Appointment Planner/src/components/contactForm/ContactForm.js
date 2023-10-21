import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const phoneRegex = "[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"

  const handleNameChange = ({ target }) => {
    setName(target.value)
  }

  const handlePhoneChange = ({ target }) => {
    setPhone(target.value)
  }

  const handleEmailChange = ({ target }) => {
    setEmail(target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          id="name" 
          value={name} 
          type="text"
          onChange={handleNameChange}
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          value={phone}
          pattern={phoneRegex}
          type="tel"
          onChange={handlePhoneChange}
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          value={email} 
          type='email'
          onChange={handleEmailChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

