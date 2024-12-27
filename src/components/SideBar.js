import React, { useState, useContext } from 'react';
import { ContactsContext } from '../contexts/ContactsContext';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

const Sidebar = () => {
  const { contacts } = useContext(ContactsContext); // Ensure contacts is correctly populated
  const [filteredContacts, setFilteredContacts] = useState(contacts); // Initialize with all contacts

  // Handle search functionality
  const handleSearch = (query) => {
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  return (
    <div className="d-flex flex-column h-100">
      <SearchBar onSearch={handleSearch} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default Sidebar;
