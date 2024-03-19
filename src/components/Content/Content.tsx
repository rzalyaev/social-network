import React from 'react';
import styles from './Content.module.css';
import {Profile} from "./Profile/Profile";
import {Messenger} from "./Messenger/Messenger";
import {Navigate, Route, Routes} from "react-router-dom";

export const Content = () => {
  return (
      <div className={styles.content}>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
          <Route path={'/messenger'} element={<Messenger/>}/>
        </Routes>
      </div>
  );
};