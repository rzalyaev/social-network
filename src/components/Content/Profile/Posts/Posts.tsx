import React, {ChangeEvent, useState} from 'react';
import styles from './Posts.module.css';
import {Post} from "./Post/Post";
import {PostsType} from "../../../../redux/store";
import {Dispatch, UnknownAction} from "redux";
import {addPostAC} from "../../../../redux/reducers/profileReducer";

type PostsPropsType = {
  posts: PostsType
  dispatch: Dispatch<UnknownAction>
}

export const Posts = ({posts, dispatch}: PostsPropsType) => {
  const [currentPostText, setCurrentPostText] = useState('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setCurrentPostText(event.currentTarget.value);
  const handleSendMessage = () => {
    dispatch(addPostAC(currentPostText));
    setCurrentPostText('');
  };

  const postsList = posts.map(post => <Post postText={post.text}/>);

  return (
      <div className={styles.postsWrapper}>
        <div className={styles.sendPostForm}>
          <input name="postText"
                 id="1"
                 value={currentPostText}
                 onChange={handleInputChange} className={styles.sendPostInput}></input>
          {currentPostText.length > 0 &&
              <button className={styles.sendPostButton} onClick={handleSendMessage}>Send</button>}
        </div>
        <div>
          {postsList}
        </div>
      </div>
  );
};