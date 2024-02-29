export interface todoType {
  id: number;
  value: string;
  completed: boolean;
}
export type modeType = "light" | "dark";

export interface todoStateType {
  todoList: todoType[];
  mode: modeType;
  idIncre: number;
}
