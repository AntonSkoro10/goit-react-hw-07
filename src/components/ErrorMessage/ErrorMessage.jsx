
import React from 'react';
import { useSelector } from 'react-redux';

const ErrorMessage = () => {
  const error = useSelector(state => state.contacts.error);

  if (!error) return null;

  return <p style={{ color: 'red' }}>{error}</p>;
};

export default ErrorMessage;
