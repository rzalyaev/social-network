import React from 'react';
import styles from './Post.module.css';

type PostPropsType = {
  postText: string
}

export const Post = ({postText}: PostPropsType) => {
  return (
      <div className={styles.postWrapper}>
        <img src="https://img.freepik.com/premium-vector/beard-man-avatar_96853-399.jpg"
             alt="post author avatar"
             className={styles.authorAvatar}
        />
        <p className={styles.postText}>{postText}</p>
      </div>
  );
};