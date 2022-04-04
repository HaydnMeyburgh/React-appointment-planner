import React, { useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const [contacts, setContacts] = useState([{
    name: 'Haydn',
    phone: '0791751751',
    email: 'haydn@gmail.com'
  }]);

  const addContact = (name, phone, email) => {
    setContacts(prev => [...prev, {name: name, phone: phone, email: email}]);
    
  };
  console.log(contacts);
  
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (title, contact, time) => {
    setAppointments(prev => [...prev, {title: title, contact: contact, time: time}]);
  };
  // console.log(addAppointment)

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
              contacts={contacts}
              addContact={addContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
              appointments={appointments}
              addAppointment={addAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
