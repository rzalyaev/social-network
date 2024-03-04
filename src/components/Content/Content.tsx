import React from 'react';
import styles from './Content.module.css';
import {ProfilePage} from "./ProfilePage/ProfilePage";
import {Messenger} from "./Messenger/Messenger";
import {Route, Routes} from "react-router-dom";

export const Content = () => {
  return (
      <div className={styles.content}>
        <Routes>
          <Route path={'/profile'} element={<ProfilePage/>}/>
          <Route path={'/messenger'} element={<Messenger/>}/>
        </Routes>
      </div>
  );
};