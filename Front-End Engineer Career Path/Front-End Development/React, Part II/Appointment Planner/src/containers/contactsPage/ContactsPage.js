import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, updateContacts, appointments }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [ name, setName ] = useState('')
  const [ phoneNumber, setPhoneNumber ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ duplicateName, setDuplicateName ] = useState(false)

  useEffect(() => {
    contacts.forEach(contact => {
      if (contact.name === name) {
        setDuplicateName(true)
      }
    })
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicateName) {
      updateContacts(name, phoneNumber, email)
      setName('')
      setPhoneNumber('')
      setEmail('')
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm
          name={name}
          setName={setName}
          phone={phoneNumber}
          setPhone={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={contacts} />
      </section>
    </div>
  );
};
