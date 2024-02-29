import { ActionType } from "type";
import { todoStateType, todoType } from "types/todoTypes";
import {
  ADD_TODO,
  CHANGE_FILTER,
  CHANGE_MODE,
  CLEAR_COMPLETE,
  MARK_COMPLETE,
  REMOVE_TODO,
} from "./toConstant";

const initialState: todoStateType = {
  todoList: [],
  mode: "dark",
  idIncre: 0,
  activeFilter: "All",
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
    case CLEAR_COMPLETE: {
      return {
        ...state,
        todoList: state.todoList.filter((todo) => !todo.completed),
      };
    }
    case CHANGE_FILTER: {
      return {
        ...state,
        activeFilter: action.payload,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
