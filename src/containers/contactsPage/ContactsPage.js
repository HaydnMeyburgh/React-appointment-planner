import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm.js';
import { TileList } from '../../components/tileList/TileList.js';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const contacts = props.contacts;
  const addContacts = props.addContact;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicateCheck, setDuplicateCheck] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (duplicateCheck === false) {
      addContacts(name, phone, email);
      setEmail('');
      setName('');
      setPhone('');
    } 
  };
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    for (const contact of contacts){
      if (name === contact.name) {
        alert('This name is a duplicate, please use another');
        setDuplicateCheck(true);
      }
    }
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm  
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList info={contacts}/>
      </section>
    </div>
  );
};
