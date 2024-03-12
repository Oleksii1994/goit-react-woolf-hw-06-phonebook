import { ContactItemLi, DeleteBtn } from './ContactItem.styled';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = ({ id, name }) => {
    dispatch(deleteContact(id));
    Notiflix.Notify.success(`Contact ${name} deleted successfully`);
  };

  return (
    <ContactItemLi>
      {name}: {number}
      <DeleteBtn type="button" onClick={() => handleDelete({ id, name })}>
        Delete
      </DeleteBtn>
    </ContactItemLi>
  );
};
