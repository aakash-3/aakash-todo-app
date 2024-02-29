import React from "react";
import { todoType } from "types/todoTypes";
import { ReactComponent as Check } from "images/icon-check.svg";
import { ReactComponent as Cross } from "images/icon-cross.svg";
import { buttonBg, theme } from "theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "type";
import {
  markComplete,
  removeTodo,
} from "store/Reducers/todoReducer/todoAction";

interface Props extends todoType {
  isLast: boolean;
}

const TodoItem = ({ id, value, completed, isLast }: Props) => {
  const { mode } = useSelector((state: AppState) => state.todoReducer);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        borderBottom: `${isLast ? "0px" : "1px"} solid ${theme.border}`,
      }}
    >
      <button
        style={{
          border: `1px solid ${theme.border}`,
          background: completed ? buttonBg : "",
        }}
        onClick={() => dispatch(markComplete(id))}
      >
        {completed ? <Check /> : ""}
      </button>
      <p
        style={{
          flex: 1,
          color:
            mode === "light"
              ? theme.light.fontColor.secondary
              : theme.dark.fontColor.secondary,
          textDecoration: completed ? "line-through" : "",
          opacity: completed ? 0.8 : 1,
        }}
      >
        {value}
      </p>
      <button onClick={() => dispatch(removeTodo(id))}>
        <Cross />
      </button>
    </div>
  );
};

export default TodoItem;
