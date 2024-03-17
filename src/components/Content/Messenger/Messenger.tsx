import React from 'react';
import styles from './Messenger.module.css';
import {Contact} from "./Contact/Contact";
import {MessengerPageType} from "../../../redux/store";

type MessengerPropsType = {
  messengerPage: MessengerPageType
}

export const Messenger = ({messengerPage}: MessengerPropsType) => {
  const mappedContacts = messengerPage.contacts.map(contact => <Contact contact={contact}/>)

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