import { useDispatch, useSelector } from "react-redux";
import styles from "styles/todo.module.scss";
import { ReactComponent as Sun } from "images/icon-sun.svg";
import { ReactComponent as Moon } from "images/icon-moon.svg";

import { AppDispatch, AppState } from "type";
import { changeMode } from "store/Reducers/todoReducer/todoAction";

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
    </div>
  );
};

export default Header;
