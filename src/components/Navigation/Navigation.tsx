import React from 'react';
import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
      <ul className={styles.navigation}>
        <li className={styles.sidebarItem}><a href="">Profile</a></li>
        <li className={styles.sidebarItem}><a href="">Messages</a></li>
        <li className={styles.sidebarItem}><a href="">News</a></li>
        <li className={styles.sidebarItem}><a href="">Music</a></li>
        <li className={styles.sidebarItem}><a href="">Settings</a></li>
      </ul>
  );
};