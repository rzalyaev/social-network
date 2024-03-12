import React, {ChangeEvent, useState} from 'react';
import styles from './Posts.module.css';
import {Post} from "./Post/Post";
import {PostsType, PostType} from "../../../../state/state";

type PostsPropsType = {
  posts: PostsType
}

export const Posts = ({posts}: PostsPropsType) => {
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

  const postsList = postsArray.map(post => <Post postText={post.text}/>)

  return (
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
          {postsList}
        </div>
      </div>
  );
};