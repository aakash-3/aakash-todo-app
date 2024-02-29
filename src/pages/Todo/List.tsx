import { useSelector } from "react-redux";
import styles from "styles/todo.module.scss";
import { theme } from "theme/theme";
import { AppState } from "type";
import TodoItem from "./TodoItem";

const List = () => {
  const { mode, todoList } = useSelector(
    (state: AppState) => state.todoReducer
  );
  return (
    <div
      className={styles.list}
      style={{
        backgroundColor:
          mode === "light"
            ? theme.light.backgroundColor.primary
            : theme.dark.backgroundColor.secondary,
        boxShadow: theme.boxShadow,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {todoList.map((todo, index) => (
        <TodoItem
          key={todo.id}
          {...todo}
          isLast={index === todoList.length - 1}
        />
      ))}
      <div
        style={{
          width: "100%",
          marginTop: "auto",
          backgroundColor:
            mode === "light"
              ? theme.light.backgroundColor.primary
              : theme.dark.backgroundColor.secondary,
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          position: "sticky",
          bottom: "0",
          borderTop: `1px solid ${theme.border}`,
        }}
      >
        <p
          style={{
            color:
              mode === "light"
                ? theme.light.fontColor.secondary
                : theme.dark.fontColor.secondary,
          }}
        >
          {todoList.length} {todoList.length > 1 ? "Items" : "Item"}
        </p>
      </div>
    </div>
  );
};

export default List;
