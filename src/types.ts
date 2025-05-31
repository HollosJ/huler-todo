export interface SubTodoItem {
  id: number;
  name: string;
  completed: boolean;
}

export interface TodoItem extends SubTodoItem {
  subTodoItems: SubTodoItem[];
}
