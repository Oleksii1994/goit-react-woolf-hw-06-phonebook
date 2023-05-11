// import { useState, useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

export function App() {
  const stateContacts = useSelector(state => state.contacts);
  // const stateFilter = useSelector(state => state.filter);

  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // function getVisibleContacts(contacts, filter) {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // }

  // function deleteContact(contactId, contactName) {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  //   Notiflix.Notify.success(`Contact ${contactName} deleted successfully`);
  // }

  return (
    <div className="container">
      <h1>PhoneBook</h1>
      <ContactForm />

      <div>
        {stateContacts.length > 0 && (
          <div>
            <h2>Contacts</h2>
            <Filter />
          </div>
        )}
        {stateContacts.length > 0 && <ContactsList />}
      </div>
    </div>
  );
}
