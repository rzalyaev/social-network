import React from 'react';
import styles from './Content.module.css';
import {ProfilePage} from "./ProfilePage/ProfilePage";

export const Content = () => {
  return (
      <div className={styles.content}>
        <ProfilePage/>
      </div>
  );
};