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
  const [contacts, setContacts] = useState([{}]);
  const addContact = (name, email, number) => {
    setContacts((prev) => ({
      ...prev,
      Name: name,
      Email: email,
      Number: number
    }));
  };
  // console.log(addContact)

  const [appointments, setAppointments] = useState([{}]);
  const addAppointment = (title, contact, time) => {
    setAppointments((prev) => ({
      ...prev,
      Title: title,
      Contact: contact,
      Date: new Date(),
      Time: time
    }));
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
