import React from 'react';
import {Profile} from "./Profile/Profile";
import {Posts} from "./Posts/Posts";

export const ProfilePage = () => {
  return (
      <div>
        <div>
          <img src="#" alt="profile banner"/>
        </div>
        <Profile/>
        <Posts/>
      </div>
  );
};