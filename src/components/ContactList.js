import React, { useState, useContext } from 'react';
import { ContactsContext } from '../contexts/ContactsContext';

const ContactList = () => {
  const { contacts, setSelectedContact } = useContext(ContactsContext);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter contacts based on the search query
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="contact-list-container p-4">
      {/* Search Bar */}
      <div>
        <h4 className='text-white'>Chat</h4>
        
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Contact List */}
      <ul className="list-group">
        {filteredContacts.map((contact) => (
          <li
            key={contact.id}
            className="list-group-item list-group-item-action d-flex align-items-center p-2"
            onClick={() => setSelectedContact(contact.id)}
          >
            <img
              src={`/images/icon.png`}
              alt="Profile"
              className="rounded-circle me-3"
              onError={(e) => (e.target.src = '/images/dummy.webp')}
              style={{ width: '40px', height: '40px' }}
            />
            <div>
              <h6 className="m-0">{contact.name}</h6>
              <small className="text-muted">Last seen 2 hours ago</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
