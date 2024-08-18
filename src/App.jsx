
import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

const App = () => {
  return (
    <div>
      <h1>Contacts Book</h1>
      <ContactForm />
      <ErrorMessage />
      <ContactList />
    </div>
  );
};

export default App;
