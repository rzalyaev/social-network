import {MessengerPageType} from "../store";
import {v1} from "uuid";

enum MessengerReducerActionTypes {
  ADD_MESSAGE = 'reducers/messengerReducer/ADD-MESSAGE'
}

type AddMessageAT = {
  type: MessengerReducerActionTypes.ADD_MESSAGE
  newMessageText: string
}

type ActionTypes = AddMessageAT;

const initialState: MessengerPageType = {
  contacts: [
    {id: v1(), name: 'Ilya Ashikhmin', sex: 'male'},
    {id: v1(), name: 'Kirill Shaidurov', sex: 'male'},
    {id: v1(), name: 'Andrei Babushkin', sex: 'male'},
    {id: v1(), name: 'Anastasia Antonova', sex: 'female'},
    {id: v1(), name: 'Vladislav Bokarev', sex: 'male'},
    {id: v1(), name: 'Anastasia Yermolayeva', sex: 'female'},
  ],
  messages: [
    {id: v1(), text: 'Hello!'},
    {id: v1(), text: 'How are you?'},
    {id: v1(), text: 'It is a message!'},
  ]
};

const messengerReducer = (state: MessengerPageType = initialState, action: ActionTypes) => {
  switch (action.type) {
    case MessengerReducerActionTypes.ADD_MESSAGE:
      const newMessage = {id: v1(), text: action.newMessageText};
      return {...state, messages: [newMessage, ...state.messages]};
    default: return state;
  }
};
export default messengerReducer;

const addMessageAC = (newMessageText: string) => {
  return {type: MessengerReducerActionTypes.ADD_MESSAGE, newMessageText};
}