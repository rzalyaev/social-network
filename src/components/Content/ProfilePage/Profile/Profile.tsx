import React from 'react';
import styles from './Profile.module.css';

export const Profile = () => {
  return (
      <div className={styles.profileWrapper}>
        <img src="https://engineering.grab.com/img/one-small-step-closer-to-containerising-service-binaries/cover.png"
             alt="profile banner"
             className={styles.banner}
        />
        <div className={styles.profileContent}>
          <div className={styles.avatarWrapper}>
            <img
                src="https://img.freepik.com/premium-vector/beard-man-avatar_96853-399.jpg"
                alt="profile avatar"
                className={styles.avatar}
            />
          </div>
          <div className={styles.profileInfo}>
            <h2>Ruslan Zalyaev</h2>
            <p className={styles.dateOfBirth}>28 July 1995</p>
            <p><img src="https://cdn-icons-png.flaticon.com/512/0/619.png" alt="city icon"/> Izhevsk</p>
            <p>
              <img src="https://cdn-icons-png.freepik.com/256/1006/1006771.png" alt="web site icon"/>
              <a href="https://github.com/rzalyaev">https://github.com/rzalyaev</a>
            </p>
          </div>
        </div>
      </div>
  );
};