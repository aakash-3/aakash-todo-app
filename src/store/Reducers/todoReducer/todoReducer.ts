import { ActionType } from "type";
import { todoStateType, todoType } from "types/todoTypes";
import { ADD_TODO, CHANGE_MODE } from "./toConstant";

const initialState: todoStateType = {
  todoList: [],
  mode: "light",
  idIncre: 0,
};

const todoReducer = (
  state: todoStateType = initialState,
  action: ActionType
): todoStateType => {
  switch (action.type) {
    case CHANGE_MODE: {
      return { ...state, mode: action.payload };
    }
    case ADD_TODO: {
      const newTodo: todoType = {
        id: state.idIncre,
        value: action.payload,
        completed: false,
      };
      return {
        ...state,
        todoList: [newTodo, ...state.todoList],
        idIncre: state.idIncre + 1,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
