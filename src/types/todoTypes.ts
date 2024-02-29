export interface todoType {
  id: string;
  value: string;
  completed: boolean;
}

export interface todoStateType {
  todoList: todoType[];
}
