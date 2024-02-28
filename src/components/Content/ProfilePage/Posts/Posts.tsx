import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import styles from './Posts.module.css';
import {Post} from "./Post/Post";

type PostType = {
  id: number
  text: string
}

export const Posts = () => {
  const posts: PostType[] = [
    {id: 1, text: 'I want to be a programmer.'},
    {id: 2, text: 'I like to listening music.'},
    {id: 3, text: 'Hello, I am Ruslan.'}
  ]
  const [postsArray, setPostsArray] = useState(posts);
  const addPost = (newPostText: string) => {
    const newPost: PostType = {id: 4, text: newPostText};
    setPostsArray([newPost, ...postsArray]);
  }

  const [currentPostText, setCurrentPostText] = useState('');
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setCurrentPostText(event.currentTarget.value);
  const onClickHandler = () => {
    addPost(currentPostText);
    setCurrentPostText('');
  };

  return (
        <div>
          <div>
            <img src="#" alt="post author avatar"/>
            <p>Hey, why nobody loves me?</p>
          </div>
          <div>
            <img src="#" alt="post author avatar"/>
            <p>It's so snowy today!</p>
          </div>
          <div>
            <img src="#" alt="post author avatar"/>
            <p>I'm sexy and I know it!</p>
          </div>
      <div className={styles.postsWrapper}>
        <div className={styles.sendPostForm}>
          <input name="postText"
                 id="1"
                 value={currentPostText}
                 onChange={onChangeHandler} className={styles.sendPostInput}></input>
          {currentPostText.length > 0 &&
              <button className={styles.sendPostButton} onClick={onClickHandler}>Send</button>}
        </div>
        <div>
        </div>
      </div>
  );
};