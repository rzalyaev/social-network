import React from 'react';
import styles from './Info.module.css';
import {InfoType} from "../../../../redux/state";

type InfoPropsType = {
  info: InfoType
}

export const Info = ({info}: InfoPropsType) => {
  return (
      <div className={styles.profileWrapper}>
        <img src={info.banner}
             alt="profile banner"
             className={styles.banner}
        />
        <div className={styles.profileContent}>
          <div className={styles.avatarWrapper}>
            <img
                src={info.avatar}
                alt="profile avatar"
                className={styles.avatar}
            />
          </div>
          <div className={styles.profileInfo}>
            <h2>{info.name}</h2>
            <p className={styles.dateOfBirth}>{info.dob}</p>
            <p><img src="https://cdn-icons-png.flaticon.com/512/0/619.png" alt="city icon"/> {info.city}</p>
            <p>
              <img src="https://cdn-icons-png.freepik.com/256/1006/1006771.png" alt="web site icon"/>
              <a href={info.link}>{info.link}</a>
            </p>
          </div>
        </div>
      </div>
  );
};