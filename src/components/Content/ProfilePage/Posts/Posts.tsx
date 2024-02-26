import React from 'react';

export const Posts = () => {
  return (
      <div>
        <h3>My posts</h3>
        <div>
          <textarea name="postText" id="1"></textarea>
          <button>Send</button>
        </div>
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
        </div>
      </div>
  );
};