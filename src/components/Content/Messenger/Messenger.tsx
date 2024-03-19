import React from 'react';
import styles from './Messenger.module.css';
import {Contact} from "./Contact/Contact";
import {StateType} from "../../../redux/store";
import {useDispatch, useSelector} from "react-redux";

export const Messenger = () => {
  const messengerPage = useSelector((state: StateType) => state.messengerPage);
  const dispatch = useDispatch();

  const mappedContacts = messengerPage.contacts.map(contact => {
    return <Contact key={contact.id} contact={contact}/>
  })

  return (
    <div className={styles.messengerWrapper}>
      <section className={styles.search}>
        <input type="text" className={styles.searchInput} placeholder={'Search...'}/>
      </section>
      <section className={styles.contacts}>
        <div className={styles.contact}>
          {mappedContacts}
        </div>
      </section>
    </div>
  );
};