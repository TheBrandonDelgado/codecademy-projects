import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [ contacts, setContacts ] = useState([])
  const [ appointments, setAppointments ] = useState([])

  const updateContacts = (name, phoneNumber, email) => {
    setContacts(prev => [...prev, {
      name: name,
      phoneNumber: phoneNumber,
      email: email
    }])
  }

  const updateAppointments = (name, contact, date, time) => {
    setAppointments(prev => [ ...prev, {
      name: name,
      contact: contact,
      date: date,
      time: time
    }])
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} updateContacts={updateContacts} appointments={appointments} /> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} updateAppointments={updateAppointments} contacts={contacts} /> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
