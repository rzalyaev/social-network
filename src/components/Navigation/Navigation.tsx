import React from 'react';
import styles from './Navigation.module.css';
import {NavLink} from "react-router-dom";

export const Navigation = () => {
  return (
      <ul className={styles.navigation}>
        <li className={styles.sidebarItem}><NavLink to="/profile">Profile</NavLink></li>
        <li className={styles.sidebarItem}><NavLink to="/messenger">Messages</NavLink></li>
        <li className={styles.sidebarItem}><NavLink to="/news">News</NavLink></li>
        <li className={styles.sidebarItem}><NavLink to="/music">Music</NavLink></li>
        <li className={styles.sidebarItem}><NavLink to="/settings">Settings</NavLink></li>
      </ul>
  );
};