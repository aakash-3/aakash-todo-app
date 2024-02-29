import { ActionType } from "type";
import { todoStateType, todoType } from "types/todoTypes";
import {
  ADD_TODO,
  CHANGE_MODE,
  MARK_COMPLETE,
  REMOVE_TODO,
} from "./toConstant";

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
    case REMOVE_TODO: {
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    }
    case MARK_COMPLETE: {
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: todo.completed ? false : true };
          } else return todo;
        }),
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
