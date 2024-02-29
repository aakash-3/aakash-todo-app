import React from "react";
import { todoType } from "types/todoTypes";
import { ReactComponent as Check } from "images/icon-check.svg";
import { ReactComponent as Cross } from "images/icon-cross.svg";
import { theme } from "theme/theme";
import { useSelector } from "react-redux";
import { AppState } from "type";

interface Props extends todoType {
  isLast: boolean;
}

const TodoItem = ({ id, value, completed, isLast }: Props) => {
  const { mode } = useSelector((state: AppState) => state.todoReducer);
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
        style={{ border: `1px solid ${theme.border}` }}
        onClick={() => {}}
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
        }}
      >
        {value}
      </p>
      <button onClick={() => {}}>
        <Cross />
      </button>
    </div>
  );
};

export default TodoItem;
