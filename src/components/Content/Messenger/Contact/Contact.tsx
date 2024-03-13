import React from 'react';
import styles from './Contact.module.css';
import {ContactType} from "../../../../redux/state";

type ContactPropsType = {
  contact: ContactType
}

export const Contact = ({contact}: ContactPropsType) => {
  const imageSource: string = contact.sex === 'male'
      ? 'https://cdn-icons-png.freepik.com/256/4140/4140048.png'
      : 'https://cdn-icons-png.freepik.com/256/6997/6997662.png'

  return (
    <div className={styles.contactWrapper}>
      <img src={imageSource}
           alt="contact avatar"
           className={styles.contactAvatar}
      />
      <div className={styles.contactInfo}>
        <div className={styles.contactHeader}>
          <h5 className={styles.contactName}>{contact.name}</h5>
          <span className={styles.lastMessageDate}>01 Jan 2024</span>
        </div>
        <span className={styles.lastMessage}>Привет! Мы давно не общались...</span>
      </div>
    </div>
  );
};