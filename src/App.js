import React from 'react';
import { ContactsContextProvider } from './contexts/ContactsContext';
import { MessagesContextProvider } from './contexts/MessagesContext';
import ContactList from './components/ContactList';
import ChatWindow from './components/ChatWindow';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  return (
    <ContactsContextProvider>
      <MessagesContextProvider>
        <div className="container-fluid d-flex vh-100">
          {/* Contact List */}
          <div className="col-4 border-right" style={{ backgroundColor: '#474f55' }}>
            <ContactList />
          </div>
          {/* Chat Window */}
          <div className="col-8">
            <ChatWindow />
          </div>
        </div>
      </MessagesContextProvider>
    </ContactsContextProvider>
  );
};

export default App;
