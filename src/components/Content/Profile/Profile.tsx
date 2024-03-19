import React from 'react';
import styles from './Profile.module.css';
import {Info} from "./Info/Info";
import {Posts} from "./Posts/Posts";
import {ProfilePageType} from "../../../redux/store";
import {AppRootStateType} from "../../../redux/reduxStore";
import {useDispatch, useSelector} from "react-redux";

export const Profile = () => {
  const profilePage = useSelector<AppRootStateType, ProfilePageType>(state => state.profilePage);
  const dispatch = useDispatch();
  return (
      <div className={styles.profilePage}>
        <Info info={profilePage.info}/>
        <Posts posts={profilePage.posts} dispatch={dispatch}/>
      </div>
  );
};