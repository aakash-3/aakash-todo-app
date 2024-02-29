import { modeType } from "types/todoTypes";
import { ADD_TODO, CHANGE_MODE } from "./toConstant";
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

export { changeMode, addTodo };
