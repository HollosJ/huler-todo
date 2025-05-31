import { useState } from "react";
import AddTodo from "./Components/AddTodo";
import Header from "./Components/Layout/Header";
import Layout from "./Components/Layout/Layout";
import Main from "./Components/Layout/Main";
import List from "./Components/List";
import { TodoItem } from "./types";
import { v4 as uuid } from "uuid";

const initialTodoItems: TodoItem[] = [
  {
    id: uuid(),
    name: "Write documentation for new website",
    completed: false,
    subTodoItems: [],
  },
  {
    id: uuid(),
    name: "Speak to Dave about code review process",
    completed: false,
    subTodoItems: [],
  },
  {
    id: uuid(),
    name: "Plan project show and tell",
    completed: false,
    subTodoItems: [],
  },
  {
    id: uuid(),
    name: "Buy Tessa a birthday card",
    subTodoItems: [
      { id: uuid(), name: "Buy card", completed: true },
      { id: uuid(), name: "Write message", completed: false },
    ],
    completed: false,
  },
  {
    id: uuid(),
    name: "Annual leave request for Holiday",
    completed: true,
    subTodoItems: [],
  },
  {
    id: uuid(),
    name: "Learn more about Typescript",
    completed: true,
    subTodoItems: [],
  },
  {
    id: uuid(),
    name: "Do some christmas shopping",
    completed: true,
    subTodoItems: [],
  },
];

export default function App() {
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const onSubmit = (name: string) => {
    if (!name.trim()) return;

    setTodoItems([
      ...todoItems,
      { id: uuid(), name, completed: false, subTodoItems: [] },
    ]);
  };

  const onAddSubTodo = (parentId: string, name: string) => {
    if (!name.trim()) return;

    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === parentId
          ? {
              ...item,
              subTodoItems: [
                ...item.subTodoItems,
                { id: uuid(), name, completed: false },
              ],
            }
          : item
      )
    );
  };

  const onToggleComplete = (id: string, parentId?: string) => {
    // If item is a top-level todo (parent id not provided), toggle its completion status
    // If item is a sub-todo todo (parent id provided), toggle its completion status, and update the parent item if all sub-todos are completed
    if (!parentId) {
      setTodoItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id
            ? {
                ...item,
                completed: !item.completed,
                // Toggle all child status
                subTodoItems: item.subTodoItems.map((subTodoItem) => ({
                  ...subTodoItem,
                  completed: !item.completed,
                })),
              }
            : item
        )
      );
      return;
    } else {
      setTodoItems((prevItems) =>
        prevItems.map((item) => {
          if (item.id === parentId) {
            const updatedSubTodos = item.subTodoItems.map((subItem) =>
              subItem.id === id
                ? { ...subItem, completed: !subItem.completed }
                : subItem
            );

            // Check if all sub-todos are completed
            const allCompleted = updatedSubTodos.every(
              (subItem) => subItem.completed
            );

            return {
              ...item,
              subTodoItems: updatedSubTodos,
              completed: allCompleted,
            };
          }
          return item;
        })
      );
    }
  };

  return (
    <div className="App">
      <Layout>
        <Header />

        <Main>
          <AddTodo onSubmit={onSubmit} />

          <List
            title="Todo"
            items={todoItems.filter((item) => !item.completed)}
            onToggleComplete={onToggleComplete}
            onAddSubTodo={onAddSubTodo}
          />

          <List
            title="Done"
            items={todoItems.filter((item) => item.completed)}
            onToggleComplete={onToggleComplete}
            onAddSubTodo={onAddSubTodo}
          />
        </Main>
      </Layout>
    </div>
  );
}
