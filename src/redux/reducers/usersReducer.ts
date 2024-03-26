import {v1} from "uuid";

enum UsersReducerActionTypes {
  SET_USERS = 'reducers/usersReducer/SET-USERS',
  SUBSCRIBE = 'reducers/usersReducer/SUBSCRIBE',
  UNSUBSCRIBE = 'reducers/usersReducer/UNSUBSCRIBE'
}

type UserNameType = {
  firstName: string
  lastName: string
}
type UserLocationType = {
  county: string
  city: string
}
export type UserType = {
  id: string
  photoURL: string
  name: UserNameType
  status: string
  location: UserLocationType
  subscribed: boolean
}
export type UsersPageType = UserType[];
const initialState: UsersPageType = [
  {
    id: v1(),
    photoURL: 'https://cdn-icons-png.freepik.com/256/4140/4140048.png',
    name: {
      firstName: 'Ruslan',
      lastName: 'Zalyaev'
    },
    status: 'This is my status!',
    location: {
      county: 'Russia',
      city: 'Izhevsk'
    },
    subscribed: false
  },
  {
    id: v1(),
    photoURL: 'https://cdn-icons-png.freepik.com/256/4140/4140048.png',
    name: {
      firstName: 'Dmitriy',
      lastName: 'Kuzyuberdin'
    },
    status: 'I am the boss!',
    location: {
      county: 'Belarus',
      city: 'Minsk'
    },
    subscribed: true
  },
  {
    id: v1(),
    photoURL: 'https://cdn-icons-png.freepik.com/256/6997/6997662.png',
    name: {
      firstName: 'Anna',
      lastName: 'Taylor'
    },
    status: 'React is cool!',
    location: {
      county: 'United States',
      city: 'New York'
    },
    subscribed: true
  }
];

type SetUsersAT = {
  type: UsersReducerActionTypes.SET_USERS
  users: UserType[]
}
type SubscribeAT = {
  type: UsersReducerActionTypes.SUBSCRIBE
  userId: string
}
type UnsubscribeAT = {
  type: UsersReducerActionTypes.UNSUBSCRIBE
  userId: string
}
type ActionTypes = SetUsersAT | SubscribeAT | UnsubscribeAT;

const usersReducer = (state: UsersPageType = initialState, action: ActionTypes): UsersPageType => {
  switch (action.type) {
    case UsersReducerActionTypes.SET_USERS:
      return [...state, ...action.users];
    case UsersReducerActionTypes.SUBSCRIBE:
      return state.map(user => user.id === action.userId ? {...user, subscribed: true} : user);
    case UsersReducerActionTypes.UNSUBSCRIBE:
      return state.map(user => user.id === action.userId ? {...user, subscribed: false} : user);
    default: return state;
  }
};
export default usersReducer;

export const setUsersAC = (users: UserType[]): SetUsersAT => ({type: UsersReducerActionTypes.SET_USERS, users});
export const subscribeAC = (userId: string): SubscribeAT => ({type: UsersReducerActionTypes.SUBSCRIBE, userId});
export const unsubscribeAC = (userId: string): UnsubscribeAT => ({type: UsersReducerActionTypes.UNSUBSCRIBE, userId});