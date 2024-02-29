import { modeType } from "types/todoTypes";
import {
  ADD_TODO,
  CHANGE_MODE,
  MARK_COMPLETE,
  REMOVE_TODO,
} from "./toConstant";
import { AppDispatch } from "type";

const changeMode = (payload: modeType) => {
  return {
    type: CHANGE_MODE,
    payload,
  };
};

const addTodo = (todo: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: ADD_TODO,
    payload: todo,
  });
};
const removeTodo = (todo: number) => (dispatch: AppDispatch) => {
  dispatch({
    type: REMOVE_TODO,
    payload: todo,
  });
};
const markComplete = (todo: number) => (dispatch: AppDispatch) => {
  dispatch({
    type: MARK_COMPLETE,
    payload: todo,
  });
};

export { changeMode, addTodo, removeTodo, markComplete };
