import React from 'react';
import styles from './ProfilePage.module.css';
import {Profile} from "./Profile/Profile";
import {Posts} from "./Posts/Posts";
import {ProfilePageType} from "../../../state/state";

type ProfilePagePropsType = {
  profilePage: ProfilePageType
}

export const ProfilePage = ({profilePage}: ProfilePagePropsType) => {
  return (
      <div className={styles.profilePage}>
        <Profile/>
        <Posts posts={profilePage.posts}/>
      </div>
  );
};