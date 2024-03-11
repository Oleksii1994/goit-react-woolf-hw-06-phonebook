import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export function App() {
  const stateContacts = useSelector(getContacts);

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
