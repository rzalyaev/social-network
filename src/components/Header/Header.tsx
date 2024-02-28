import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
  return (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logoWrapper}>
            <img src="https://i.imgur.com/BGCp8In.png" alt="logo" className={styles.logo}/>
          </div>
          <h1>Social Network</h1>
        </div>
      </header>
  );
};

export default Header;