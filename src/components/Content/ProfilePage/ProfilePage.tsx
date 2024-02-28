import React from 'react';
import styles from './ProfilePage.module.css';
import {Profile} from "./Profile/Profile";
import {Posts} from "./Posts/Posts";

export const ProfilePage = () => {
  return (
      <div className={styles.profilePage}>
        <Profile/>
        <Posts/>
      </div>
  );
};