import { useSelector } from "react-redux";
import Header from "./Header";
import styles from "styles/todo.module.scss";
import { AppState } from "type";
import { theme } from "theme/theme";
import List from "./List";

const Todo = () => {
  const { mode } = useSelector((state: AppState) => state.todoReducer);
  return (
    <div className={styles.container}>
      <Header />
      <List />
    </div>
  );
};

export default Todo;
