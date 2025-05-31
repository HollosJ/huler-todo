import { useState } from "react";
import AddTodo from "./Components/AddTodo";
import Header from "./Components/Layout/Header";
import Layout from "./Components/Layout/Layout";
import Main from "./Components/Layout/Main";
import List from "./Components/List";
import { TodoItem } from "./types";

const initialTodoItems: TodoItem[] = [
  {
    id: 1,
    name: "Write documentation for new website",
    completed: false,
    subTodoItems: [],
  },
  {
    id: 2,
    name: "Speak to Dave about code review process",
    completed: false,
    subTodoItems: [],
  },
  {
    id: 3,
    name: "Plan project show and tell",
    completed: false,
    subTodoItems: [],
  },
  {
    id: 4,
    name: "Buy Tessa a birthday card",
    subTodoItems: [
      { id: 1, name: "Buy card", completed: true },
      { id: 2, name: "Write message", completed: false },
    ],
    completed: false,
  },
  {
    id: 5,
    name: "Annual leave request for Holiday",
    completed: true,
    subTodoItems: [],
  },
  {
    id: 6,
    name: "Learn more about Typescript",
    completed: true,
    subTodoItems: [],
  },
  {
    id: 7,
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
      { id: Date.now(), name, completed: false, subTodoItems: [] }, // Should use UUID for the ID here, but for simplicity, using timestamp
    ]);
  };

  const onAddSubTodo = (parentId: number, name: string) => {
    if (!name.trim()) return;

    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === parentId
          ? {
              ...item,
              subTodoItems: [
                ...item.subTodoItems,
                { id: Date.now(), name, completed: false },
              ],
            }
          : item
      )
    );
  };

  const onToggleComplete = (id: number, parentId?: number) => {
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
