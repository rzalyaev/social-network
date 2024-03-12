import React from 'react';
import styles from './Content.module.css';
import {ProfilePage} from "./ProfilePage/ProfilePage";
import {Messenger} from "./Messenger/Messenger";
import {Navigate, Route, Routes} from "react-router-dom";
import {StateType} from "../../state/state";

type ContentPropsType = {
  state: StateType
}

export const Content = ({state}: ContentPropsType) => {
  return (
      <div className={styles.content}>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
          <Route path={'/profile'} element={<ProfilePage profilePage={state.profilePage}/>}/>
          <Route path={'/messenger'} element={<Messenger messengerPage={state.messengerPage}/>}/>
        </Routes>
      </div>
  );
};