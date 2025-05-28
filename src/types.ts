export interface SubTodoItem {
  id: number;
  name: string;
  completed: boolean;
}

export interface TodoItem {
  id: number;
  name: string;
  completed: boolean;
  subTodoItems: SubTodoItem[];
}
