import { useDispatch, useSelector } from "react-redux";
import styles from "styles/todo.module.scss";
import { ReactComponent as Sun } from "images/icon-sun.svg";
import { ReactComponent as Moon } from "images/icon-moon.svg";
import { ReactComponent as Check } from "images/icon-check.svg";

import { AppDispatch, AppState } from "type";
import { addTodo, changeMode } from "store/Reducers/todoReducer/todoAction";
import { theme } from "theme/theme";
import { useState } from "react";

const Header = () => {
  const { mode } = useSelector((state: AppState) => state.todoReducer);
  const dispatch: AppDispatch = useDispatch();
  const [inputData, setInputData] = useState("");

  const handleAddTodo = () => {
    if (inputData.trim() === "") {
      window.alert("Input can not be empty!");
    } else {
      dispatch(addTodo(inputData));
      setInputData("");
    }
  };
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <p>TODO</p>
        <button
          onClick={() =>
            dispatch(changeMode(mode === "light" ? "dark" : "light"))
          }
        >
          {mode === "light" ? <Moon /> : <Sun />}
        </button>
      </div>
      <div
        className={styles.inputBox}
        style={{
          backgroundColor:
            mode === "light"
              ? theme.light.backgroundColor.primary
              : theme.dark.backgroundColor.secondary,
        }}
      >
        <input
          type="text"
          placeholder="Create a new todo..."
          value={inputData}
          style={{
            color:
              mode === "light"
                ? theme.light.fontColor.secondary
                : theme.dark.fontColor.secondary,
          }}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={handleAddTodo}>
          <Check />
        </button>
      </div>
    </div>
  );
};

export default Header;
