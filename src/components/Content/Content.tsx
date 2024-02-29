import React from 'react';
import styles from './Content.module.css';
import {ProfilePage} from "./ProfilePage/ProfilePage";
import {Messenger} from "./Messenger/Messenger";

export const Content = () => {
  return (
      <div className={styles.content}>
        {/*<ProfilePage/>*/}
        <Messenger/>
      </div>
  );
};