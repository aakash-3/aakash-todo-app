import Header from "./Header";
import styles from "styles/todo.module.scss";
import List from "./List";
import Filter from "./Filter";
import useWindowSize from "hooks/useWindowSize";
import { useSelector } from "react-redux";
import { AppState } from "type";
import { theme } from "theme/theme";

const Todo = () => {
  const { mode } = useSelector((state: AppState) => state.todoReducer);
  const { width } = useWindowSize();
  return (
    <div className={styles.container}>
      <Header />
      <List />
      {width < 768 ? (
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            marginTop: "auto",
            backgroundColor:
              mode === "light"
                ? theme.light.backgroundColor.primary
                : theme.dark.backgroundColor.secondary,
            boxShadow: theme.boxShadow,
            padding: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            borderRadius: "8px",
          }}
        >
          <Filter />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Todo;
