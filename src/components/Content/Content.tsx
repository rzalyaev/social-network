import React from 'react';
import styles from './Content.module.css';
import {Profile} from "./Profile/Profile";
import {Messenger} from "./Messenger/Messenger";
import {Navigate, Route, Routes} from "react-router-dom";
import {StateType} from "../../redux/store";

type ContentPropsType = {
  state: StateType
}

export const Content = ({state}: ContentPropsType) => {
  return (
      <div className={styles.content}>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
          <Route path={'/profile'} element={<Profile profilePage={state.profilePage}/>}/>
          <Route path={'/messenger'} element={<Messenger messengerPage={state.messengerPage}/>}/>
        </Routes>
      </div>
  );
};