import React from 'react';
import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
      <ul className={styles.navigation}>
        <li className={styles.sidebarItem}><a href="/profile">Profile</a></li>
        <li className={styles.sidebarItem}><a href="/messages">Messages</a></li>
        <li className={styles.sidebarItem}><a href="/news">News</a></li>
        <li className={styles.sidebarItem}><a href="/music">Music</a></li>
        <li className={styles.sidebarItem}><a href="/video">Settings</a></li>
      </ul>
  );
};