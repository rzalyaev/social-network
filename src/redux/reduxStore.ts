import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import messengerReducer from "./reducers/messengerReducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messengerPage: messengerReducer
});

export const reduxStore = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = reduxStore
