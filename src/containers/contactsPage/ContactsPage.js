import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm.js';
import { TileList } from '../../components/tileList/TileList.js';

export const ContactsPage = ({contacts, addContact}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicateCheck, setDuplicateCheck] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add contact info and clear data if the contact name is not a duplicate
    if (duplicateCheck === false) {
      addContact(name, phone, email);
      setEmail('');
      setName('');
      setPhone('');
    } 
  };
  
  //check for contact name in the contacts array variable in props  
  useEffect(() => { //useEffect isnt being called when the name state is changing... Need to fix this as duplicateCheck remains true even if name state is changed
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
