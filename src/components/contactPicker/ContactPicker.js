import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <div>
      <select onChange={onChange}>
        <option selected='selected' key={-1} value='Please select'>Please Select Your contact details</option>
        {contacts.map((contact, index) => (
          <option key={contact[index]} value={contact.name}>{contact.name}</option>
        ))}
      </select>
    </div>
  );
};
