import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddContactForm from '../AddContactForm/AddContactForm';
import FindContact from 'components/FindContact/FindContact';
import ContactList from 'components/ContactList/ContactList';
import styles from './App.module.css';
import { fetchContacts } from './../../redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={styles.smartphone}>
      <div className={styles.content}>
        <AddContactForm />

        <div className={styles.findContainer}>
          {isLoading && !error && (
            <div className={styles.loadCnt}>
              <div className={styles.loader}></div>;
            </div>
          )}
          {error && !isLoading && <b> error</b>}

          {<ContactList />}
        </div>
        <FindContact />
      </div>
    </div>
  );
};
