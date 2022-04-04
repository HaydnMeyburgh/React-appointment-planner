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
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" 
        type='text' 
        name="name"
        value={name} 
        onChange={({target}) => setName(target.value)}
      />
      <input placeholder="Email" 
        type='email' 
        name="email" 
        value={email}
        onChange={({target}) => setEmail(target.value)}
      />
      <input placeholder="Phone Number" 
        type='tel' 
        name="phone" 
        value={phone} 
        pattern="^(27|0)[0-9]{9}"
        onChange={({target}) => setPhone(target.value)} 
      />
      <input type='submit' />
    </form>
  );
};
