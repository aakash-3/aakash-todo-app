import { useDispatch, useSelector } from "react-redux";
import styles from "styles/todo.module.scss";
import { theme } from "theme/theme";
import { AppDispatch, AppState } from "type";
import TodoItem from "./TodoItem";
import { clearComplete } from "store/Reducers/todoReducer/todoAction";
import Filter from "./Filter";
import { useEffect, useState } from "react";
import { todoType } from "types/todoTypes";
import useWindowSize from "hooks/useWindowSize";

const List = () => {
  const { mode, todoList, activeFilter } = useSelector(
    (state: AppState) => state.todoReducer
  );
  const [data, setData] = useState<todoType[]>([]);
  const [leftItemCount, setLeftItemCount] = useState<number>(0);
  const { width } = useWindowSize();

  const dispatch: AppDispatch = useDispatch();

  const handleFilterData = () => {
    switch (activeFilter) {
      case "All": {
        setData(todoList);
        break;
      }
      case "Active": {
        const filterData = todoList.filter((todo) => !todo.completed);
        setData(filterData);
        break;
      }
      case "Completed": {
        const filterData = todoList.filter((todo) => todo.completed);
        setData(filterData);
        break;
      }
    }
  };

  useEffect(() => {
    handleFilterData();
    const filterData = todoList.filter((todo) => !todo.completed);
    setLeftItemCount(filterData.length);
  }, [todoList, activeFilter]);

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
      {data.length ? (
        data.map((todo, index) => (
          <TodoItem
            key={todo.id}
            {...todo}
            isLast={index === todoList.length - 1}
          />
        ))
      ) : (
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
            No Data Available...
          </p>
        </div>
      )}
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
          {leftItemCount} {leftItemCount > 1 ? "Items" : "Item"} left
        </p>
        {width >= 768 ? <Filter /> : <></>}
        <button
          className={styles.btn}
          style={{
            color:
              mode === "light"
                ? theme.light.fontColor.tertiory
                : theme.dark.fontColor.tertiory,
          }}
          onClick={() => dispatch(clearComplete())}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default List;
