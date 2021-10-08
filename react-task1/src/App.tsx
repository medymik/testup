import React, { useState } from 'react';
import './App.css';
import IContact from './types/IContact';
import ContactCreate from './contacts/ContactCreate';
import ContactList from './contacts/ContactList';
import ContactEdit from './contacts/ContactEdit';

function App() {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [toEditContact, setToEditContact] = useState<IContact|null>(null);

  const addContact = (contact: IContact) => {
    setContacts([...contacts, {...contact, id: contacts.length + 1}]);
  }

  const deleteContact = (contact: IContact) => {
    const newContacts = contacts.filter(item => item.id !== contact.id);
    setContacts(newContacts);
  }

  const handleEdit = (contact: IContact) => {
    const newContacts = contacts.map(item => {
      if (item.id === contact.id) {
        return contact;
      }
      return item;
    });
    setToEditContact(contact);
  }

  const handleUpdate = (contact: IContact) =>  {
    setToEditContact(null);
  }

  return (
    <div className="App">
      { toEditContact && (
        <ContactEdit contact={toEditContact} editContact={handleUpdate} />
      )}

      { toEditContact === null && (
        <ContactCreate addContact={addContact} />
      )}
    
      <ContactList onEdit={handleEdit} onDelete={deleteContact} contacts={contacts} />
    </div>
  );
}

export default App;
