import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { chageFilter } from "store/Reducers/todoReducer/todoAction";
import styles from "styles/todo.module.scss";
import { btnColor, theme } from "theme/theme";
import { AppDispatch, AppState } from "type";

const Filter = () => {
  const { mode, activeFilter } = useSelector(
    (state: AppState) => state.todoReducer
  );
  const dispatch: AppDispatch = useDispatch();
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
      }}
    >
      <button
        className={styles.btn}
        style={{
          color:
            activeFilter === "All"
              ? btnColor
              : mode === "light"
              ? theme.light.fontColor.tertiory
              : theme.dark.fontColor.tertiory,
        }}
        onClick={() => dispatch(chageFilter("All"))}
      >
        All
      </button>
      <button
        className={styles.btn}
        style={{
          color:
            activeFilter === "Active"
              ? btnColor
              : mode === "light"
              ? theme.light.fontColor.tertiory
              : theme.dark.fontColor.tertiory,
        }}
        onClick={() => dispatch(chageFilter("Active"))}
      >
        Active
      </button>
      <button
        className={styles.btn}
        style={{
          color:
            activeFilter === "Completed"
              ? btnColor
              : mode === "light"
              ? theme.light.fontColor.tertiory
              : theme.dark.fontColor.tertiory,
        }}
        onClick={() => dispatch(chageFilter("Completed"))}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
