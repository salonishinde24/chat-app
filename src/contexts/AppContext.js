import React, { createContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  contacts: [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ],
  messages: {
    1: [{ text: 'Hi John!', isSender: true }],
    2: [{ text: 'Hello Jane!', isSender: true }],
  },
  selectedContact: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONTACTS':
      return { ...state, contacts: action.payload };
    case 'SET_MESSAGES':
      return { ...state, messages: { ...state.messages, ...action.payload } };
    case 'SET_SELECTED_CONTACT':
      return { ...state, selectedContact: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
