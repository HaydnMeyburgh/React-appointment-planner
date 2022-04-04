import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker.js';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    // AppointmentForm
    <form onSubmit={handleSubmit}>
      <input placeholder="Title"
        type="text"
        name="title" 
        value={title} 
        onChange={({target}) => setTitle(target.value)}/>
      <input placeholder="date"
        type='date'
        name="date"
        value={date} 
        min={getTodayString}
        onChange={({target}) => setDate(target.value)} />
      <input placeholder="time"
        type='time'
        name="time"
        value={time} 
        onChange={({target}) => setTime(target.value)}/>
      <ContactPicker className="contact-picker" contacts={contacts} 
        value={contact} 
        name='contact' 
        onChange={({target}) => setContact(target.value)} />
      <input type='submit' value='Submit'/>
    </form>
  );
};
