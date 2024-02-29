export interface todoType {
  id: number;
  value: string;
  completed: boolean;
}
export type modeType = "light" | "dark";
export type filterType = "All" | "Active" | "Completed";

export interface todoStateType {
  todoList: todoType[];
  mode: modeType;
  idIncre: number;
  activeFilter: filterType;
}
