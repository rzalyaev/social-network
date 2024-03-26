import React from 'react';
import styles from './User.module.css';
import {UserType} from "../../../../redux/reducers/userReducer";

type UserPropsType = {
  user: UserType
  subscribe: (userId: string) => void
  unsubscribe: (userId: string) => void
}

const User = ({user, subscribe, unsubscribe}: UserPropsType) => {
  const subButtonClassName: string = `${styles.button} ${styles.subscribe}`;
  const unsubButtonClassName: string = `${styles.button} ${styles.unsubscribe}`;
  const handleSubscribe = () => subscribe(user.id);
  const handleUnsubscribe = () => unsubscribe(user.id);
  return (
      <div className={styles.wrapper}>
        <img src={user.photoURL} alt='' className={styles.photo}/>
        <div className={styles.info}>
          <span className={styles.name}>{user.name.firstName} {user.name.lastName}</span>
          <span className={styles.status}>{user.status}</span>
          <span className={styles.location}>
            <img src="https://cdn-icons-png.flaticon.com/512/0/619.png" alt="city icon"/>
            {user.location.county}, {user.location.city}
          </span>
        </div>
        {user.subscribed
            ? <button className={unsubButtonClassName} onClick={handleUnsubscribe}>Unsubscribe</button>
            : <button className={subButtonClassName} onClick={handleSubscribe}>Subscribe</button>
        }
      </div>
  );
};

export default User;