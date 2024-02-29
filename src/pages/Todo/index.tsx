import { useSelector } from "react-redux";
import Header from "./Header";
import styles from "styles/todo.module.scss";
import { AppState } from "type";
import { theme } from "theme/theme";

const Todo = () => {
  const { mode } = useSelector((state: AppState) => state.todoReducer);
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor:
          mode === "light"
            ? theme.light.backgroundColor.primary
            : theme.dark.backgroundColor.primary,
      }}
    >
      <Header />
    </div>
  );
};

export default Todo;
