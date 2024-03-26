import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import messengerReducer from "./reducers/messengerReducer";
import usersReducer from "./reducers/usersReducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messengerPage: messengerReducer,
  usersPage: usersReducer
});

export const reduxStore = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = reduxStore
