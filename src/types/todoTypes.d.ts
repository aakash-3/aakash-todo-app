export interface todoType {
  id: string;
  value: string;
  completed: boolean;
}
export type modeType = "light" | "dark";

export interface todoStateType {
  todoList: todoType[];
  mode: modeType;
}
