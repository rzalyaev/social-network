import React from 'react';
import styles from './Messenger.module.css';
import {Contact} from "./Contact/Contact";

export type ContactType = {
  id: number,
  name: string,
  sex: string
}
type ContactsType = ContactType[]

export const Messenger = () => {
  const contacts: ContactsType = [
    {id: 1, name: 'Ilya Ashikhmin', sex: 'male'},
    {id: 2, name: 'Kirill Shaidurov', sex: 'male'},
    {id: 3, name: 'Andrei Babushkin', sex: 'male'},
    {id: 4, name: 'Anastasia Antonova', sex: 'female'},
    {id: 5, name: 'Vladislav Bokarev', sex: 'male'},
    {id: 6, name: 'Anastasia Yermolayeva', sex: 'female'}
  ]

  const mappedContacts = contacts.map(contact => <Contact contact={contact}/>)

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