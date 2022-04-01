import React, { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm.js';
import {TileList} from '../../components/tileList/TileList.js';
export const ContactsPage = ({contacts, addContacts}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState('');
  const [duplicateCheck, setDuplicateCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (duplicateCheck) return;
    addContacts(name, phone, email);
    setName('');
    setPhone(null);
    setEmail('');
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (name === contacts.name) {
      alert('This name is a duplicate, please use another');
      setDuplicateCheck(true);
    }
    setName(name);
    setPhone(phone);
    setEmail(email);
  }, [name, contacts.name, email, phone]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={name}
          phone={phone}
          email={email}
          duplicateCheck={duplicateCheck}
          setEmail={setEmail}
          setName={setName}
          setPhone={setPhone}
          setDuplicateCheck={setDuplicateCheck}
          onSubmit={handleSubmit}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts}/>
      </section>
    </div>
  );
};
