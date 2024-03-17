import React from 'react';
import styles from './Profile.module.css';
import {Info} from "./Info/Info";
import {Posts} from "./Posts/Posts";
import {ProfilePageType} from "../../../redux/store";

type ProfilePagePropsType = {
  profilePage: ProfilePageType
}

export const Profile = ({profilePage}: ProfilePagePropsType) => {
  return (
      <div className={styles.profilePage}>
        <Info info={profilePage.info}/>
        <Posts posts={profilePage.posts}/>
      </div>
  );
};