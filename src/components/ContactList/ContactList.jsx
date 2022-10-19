import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import styles from './ContactList.module.css';
import { FaTrash } from 'react-icons/fa';

const ContactList = () => {
  const contactList = useSelector(getContacts);
  const filters = useSelector(getFilter);
  console.log(filters);
  const dispatch = useDispatch();

  if (filters !== null) {
    return contactList
      .filter(el => el.name.toLowerCase().includes(filters.toLowerCase()))
      .map(contact => {
        return (
          <li className={styles.contactLi} key={contact.id}>
            {contact.name}: {contact.phone}
            <button
              className={styles.deleteBtn}
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
            >
              <FaTrash />
            </button>
          </li>
        );
      });
  } else {
    return contactList.map(contact => {
      return (
        <li className={styles.contactLi} key={contact.id}>
          {contact.name}: {contact.phone}
          <button
            className={styles.deleteBtn}
            onClick={() => {
              dispatch(deleteContact(contact.id));
            }}
          >
            <FaTrash />
          </button>
        </li>
      );
    });
  }
};

export default ContactList;
