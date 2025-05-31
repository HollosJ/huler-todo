export interface SubTodoItem {
  id: string;
  name: string;
  completed: boolean;
}

export interface TodoItem extends SubTodoItem {
  subTodoItems: SubTodoItem[];
}
