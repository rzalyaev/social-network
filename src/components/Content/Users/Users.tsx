import React from 'react';
import styles from './Users.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/reduxStore";
import {subscribeAC, unsubscribeAC, UsersPageType} from "../../../redux/reducers/usersReducer";
import User from './User/User';

export const Users = () => {
  const users = useSelector<AppRootStateType, UsersPageType>(state => state.usersPage);
  const dispatch = useDispatch();
  const subscribe = (userId: string) => dispatch(subscribeAC(userId));
  const unsubscribe = (userId: string) => dispatch(unsubscribeAC(userId));
  const mappedUsers = users.map(user => <User user={user} subscribe={subscribe} unsubscribe={unsubscribe}/>);
  return (
      <div className={styles.usersWrapper}>
        {mappedUsers}
      </div>
  );
};