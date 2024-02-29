import { ActionType } from "type";
import { todoStateType } from "types/todoTypes";
import { CHANGE_MODE } from "./toConstant";

const initialState: todoStateType = {
  todoList: [],
  mode: "light",
};

const todoReducer = (
  state: todoStateType = initialState,
  action: ActionType
): todoStateType => {
  switch (action.type) {
    case CHANGE_MODE: {
      return { ...state, mode: action.payload };
    }
    default:
      return state;
  }
};

export default todoReducer;
