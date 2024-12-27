import React, { useContext } from 'react';
import { MessagesContext } from '../contexts/MessagesContext';
import { ContactsContext } from '../contexts/ContactsContext';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  const { selectedMessages } = useContext(MessagesContext);
  const { selectedContact, contacts } = useContext(ContactsContext);

  // Get the selected contact's details
  const contact = contacts.find((c) => c.id === selectedContact);

  return (
    <div className="d-flex flex-column h-100">
      {/* Header Section */}
      {selectedContact && contact && (
        <div className="d-flex align-items-center justify-content-between p-3 border-bottom bg-white">
          <div className="d-flex align-items-center">
            <img
              src={`/images/icon.png`}
              alt="Profile"
              className="rounded-circle me-3"
              style={{ width: '40px', height: '40px' }}
            />
            <h6 className="m-0">{contact.name}</h6>
          </div>
        </div>
      )}

      {/* Chat Messages Section */}
      <div className="flex-grow-1 overflow-auto p-3">
        {selectedMessages.map((msg) => (
          <div
            key={msg.id}
            className={`d-flex ${msg.isSender ? 'justify-content-end' : 'justify-content-start'} mb-2`}
          >
            <div
              className={`p-2 rounded ${msg.isSender ? 'bg-info text-white' : 'bg-info text-dark'}`}
              style={{ maxWidth: '75%', wordWrap: 'break-word', color: 'black' }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      {selectedContact && <MessageInput />}
    </div>
  );
};

export default ChatWindow;
