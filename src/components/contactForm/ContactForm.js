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
        onChange={e => setName(e.target.value)}
      />
      <input placeholder="Email" 
        type='email' 
        name="email" 
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input placeholder="Phone Number" 
        type='number' 
        name="phone" 
        value={phone} 
        pattern="^(27|0)[0-9]{9}"
        onChange={e => setPhone(e.target.value)} 
      />
      <button>Submit</button>
    </form>
  );
};
