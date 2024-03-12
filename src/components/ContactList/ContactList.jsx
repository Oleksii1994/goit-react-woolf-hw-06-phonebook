import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactList } from './ContactList.styled';
import { getContacts, getFilterState } from 'redux/selectors';

export const ContactsList = () => {
  const contactsState = useSelector(getContacts);
  const filterState = useSelector(getFilterState);

  function getVisibleContacts(contacts) {
    const normalizedFilter = filterState.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <ContactList>
      {getVisibleContacts(contactsState).map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ContactList>
  );
};
