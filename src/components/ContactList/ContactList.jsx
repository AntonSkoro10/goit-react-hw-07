import React from 'react';
import { useSelector } from 'react-redux';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters);

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>{contact.name}: {contact.phone}</li>
      ))}
    </ul>
  );
};

export default ContactsList;
