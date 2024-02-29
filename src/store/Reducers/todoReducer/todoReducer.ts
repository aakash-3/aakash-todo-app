import { ActionType } from "../../../type";
import { todoStateType } from "../../../types/todoTypes";

const initialState: todoStateType = {
  todoList: [],
};

const todoReducer = (
  state: todoStateType = initialState,
  action: ActionType
): todoStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todoReducer;
