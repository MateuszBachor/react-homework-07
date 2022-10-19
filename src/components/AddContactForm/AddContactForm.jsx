import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import styles from './AddContactForm.module.css';
import { FaPlus } from 'react-icons/fa';

const AddContactForm = () => {
  const contactList = useSelector(getContacts);
  const nameValue = React.useRef();
  const numberValue = React.useRef();
  const dispatch = useDispatch();
  const date = new Date();

  console.log(contactList);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      addContact({
        createdAt: date,
        name: nameValue.current.value,
        phone: numberValue.current.value,
        // id: contactList.length,
        id: contactList.length === 0 ? '1' : contactList.length,
      })
    );
    form.reset();
  };
  return (
    <div>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.formInput}>
          <label>Name</label>
          <input
            ref={nameValue}
            type="text"
            name="contact"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className={styles.formInput}>
          <label>Number</label>
          <input
            ref={numberValue}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button className={styles.formBtn} type="submit">
          Add contact{' '}
          <span className={styles.addSvg}>
            <FaPlus />
          </span>
        </button>
      </form>
    </div>
  );
};
export default AddContactForm;
