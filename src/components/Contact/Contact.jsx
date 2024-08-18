// src/components/Contact.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsOps'; 

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <p>{name}: {number}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;
