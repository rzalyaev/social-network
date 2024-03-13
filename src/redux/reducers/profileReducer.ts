import {StateType} from "../state";

type ActionType = {
  type: string
}

const ProfileReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    default: return state;
  }
};

export default ProfileReducer;