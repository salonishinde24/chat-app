import React, { createContext, useState, useContext } from 'react';
import { ContactsContext } from './ContactsContext';

export const MessagesContext = createContext();

export const MessagesContextProvider = ({ children }) => {
  const { selectedContact } = useContext(ContactsContext);
  const [messages, setMessages] = useState({
    1: [
      { id: 1, text: 'Hello!', isSender: false },
      { id: 2, text: 'Hi!', isSender: true },
    ],
    2: [],
  });

  const sendMessage = (text) => {
    const newMessage = { id: Date.now(), text, isSender: true };
    setMessages((prev) => ({
      ...prev,
      [selectedContact]: [...(prev[selectedContact] || []), newMessage],
    }));
  };

  const selectedMessages = messages[selectedContact] || [];

  return (
    <MessagesContext.Provider value={{ selectedMessages, sendMessage }}>
      {children}
    </MessagesContext.Provider>
  );
};
