import { useDispatch, useSelector } from "react-redux";
import styles from "styles/todo.module.scss";
import { ReactComponent as Sun } from "images/icon-sun.svg";
import { ReactComponent as Moon } from "images/icon-moon.svg";
import { ReactComponent as Check } from "images/icon-check.svg";

import { AppDispatch, AppState } from "type";
import { changeMode } from "store/Reducers/todoReducer/todoAction";
import { theme } from "theme/theme";

const Header = () => {
  const { mode } = useSelector((state: AppState) => state.todoReducer);
  const dispatch: AppDispatch = useDispatch();
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
          style={{
            color:
              mode === "light"
                ? theme.light.fontColor.secondary
                : theme.dark.fontColor.secondary,
          }}
        />
        <button onClick={() => {}}>
          <Check />
        </button>
      </div>
    </div>
  );
};

export default Header;
