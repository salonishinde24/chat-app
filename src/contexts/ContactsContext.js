import React, { createContext, useState } from 'react';

export const ContactsContext = createContext();

export const ContactsContextProvider = ({ children }) => {
  const [contacts] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ]);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <ContactsContext.Provider value={{ contacts, selectedContact, setSelectedContact }}>
      {children}
    </ContactsContext.Provider>
  );
};
