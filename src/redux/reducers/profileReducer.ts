import {ProfilePageType} from "../store";
import {v1} from "uuid";

enum ProfileReducerActionTypes {
  CHANGE_NAME = 'reducers/profileReducer/CHANGE-PROFILE-NAME',
  CHANGE_DATE_OF_BIRTH = 'reducers/profileReducer/CHANGE-DOB',
  CHANGE_CITY = 'reducers/profileReducer/CHANGE-PROFILE-CITY',
  CHANGE_WEBSITE_LINK = 'reducers/profileReducer/CHANGE-WEBSITE-LINK',
  ADD_POST = 'reducers/profileReducer/ADD-POST',
  CHANGE_POST_TEXT = 'reducers/profileReducer/CHANGE-POST-TEXT',
  REMOVE_POST = 'reducers/profileReducer/REMOVE-POST'
}

type ChangeNameAT = {
  type: ProfileReducerActionTypes.CHANGE_NAME,
  newProfileName: string
}
type ChangeDateOfBirthAT = {
  type: ProfileReducerActionTypes.CHANGE_DATE_OF_BIRTH,
  newDateOfBrith: string
}
type ChangeCityAT = {
  type: ProfileReducerActionTypes.CHANGE_CITY,
  newCity: string
}
type ChangeWebsiteLinkAT = {
  type: ProfileReducerActionTypes.CHANGE_WEBSITE_LINK,
  newWebsiteLink: string
}
type AddPostAT = {
  type: ProfileReducerActionTypes.ADD_POST,
  postText: string
}
type ChangePostTextAT = {
  type: ProfileReducerActionTypes.CHANGE_POST_TEXT,
  postId: string,
  newPostText: string
}
type RemovePostAT = {
  type: ProfileReducerActionTypes.REMOVE_POST,
  postId: string
}

type ActionTypes = ChangeNameAT | ChangeDateOfBirthAT | ChangeCityAT | ChangeWebsiteLinkAT | AddPostAT
    | ChangePostTextAT | RemovePostAT;

const initialState: ProfilePageType = {
  info: {
    banner: 'https://engineering.grab.com/img/one-small-step-closer-to-containerising-service-binaries/cover.png',
    avatar: 'https://img.freepik.com/premium-vector/beard-man-avatar_96853-399.jpg',
    name: 'Ruslan Zalyaev',
    dob: '28 July 1995',
    city: 'Izhevsk',
    link: 'https://github.com/rzalyaev'
  },
  posts: [
    {id: v1(), text: 'I want to be a programmer.'},
    {id: v1(), text: 'I like to listening music.'},
    {id: v1(), text: 'Hello, I am Ruslan.'}
  ]
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
  switch (action.type) {
    case ProfileReducerActionTypes.ADD_POST:
      const newPost = {id: v1(), text: action.postText};
      return {...state, posts: [newPost, ...state.posts]}
    default: return state;
  }
};
export default profileReducer;

export const changeNameAC = (newProfileName: string): ChangeNameAT => {
  return {type: ProfileReducerActionTypes.CHANGE_NAME, newProfileName} as const
}
export const changeDateOfBirthAC = (newDateOfBrith: string): ChangeDateOfBirthAT => {
  return {type: ProfileReducerActionTypes.CHANGE_DATE_OF_BIRTH, newDateOfBrith} as const
}
export const changeCityAC = (newCity: string): ChangeCityAT => {
  return {type: ProfileReducerActionTypes.CHANGE_CITY, newCity} as const
}
export const changeWebsiteLinkAC = (newWebsiteLink: string): ChangeWebsiteLinkAT => {
  return {type: ProfileReducerActionTypes.CHANGE_WEBSITE_LINK, newWebsiteLink} as const
}
export const addPostAC = (postText: string): AddPostAT => {
  return {type: ProfileReducerActionTypes.ADD_POST, postText} as const
}
export const changePostTextAC = (postId: string, newPostText: string): ChangePostTextAT => {
  return {type: ProfileReducerActionTypes.CHANGE_POST_TEXT, postId, newPostText} as const
}
export const removePostAC = (postId: string): RemovePostAT => {
  return {type: ProfileReducerActionTypes.REMOVE_POST, postId} as const
}

/*case ProfileReducerActionTypes.CHANGE_NAME:
    return {...state, info: {...state.info, name: action.newProfileName}}*/
/*case ProfileReducerActionTypes.CHANGE_DATE_OF_BIRTH:
    return {...state, info: {...state.info, dob: action.newDateOfBrith}}*/
/*case ProfileReducerActionTypes.CHANGE_CITY:
    return {...state, info: {...state.info, city: action.newCity}}*/
/*case ProfileReducerActionTypes.CHANGE_WEBSITE_LINK:
    return {...state, info: {...state.info, link: action.newWebsiteLink}}*/
/*case ProfileReducerActionTypes.CHANGE_POST_TEXT:
    return {...state, posts: state.posts.map(post => post.id === action.postId ? {...post, text: action.newPostText} : post)}*/
/*case ProfileReducerActionTypes.REMOVE_POST:
    return {...state, posts: state.posts.filter(post => post.id !== action.postId)}*/