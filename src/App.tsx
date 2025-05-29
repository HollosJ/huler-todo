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
  const [items, setTodoItems] = useState(initialTodoItems);

  const onSubmit = (name: string) => {
    if (!name.trim()) return;

    setTodoItems([
      ...items,
      { id: Date.now(), name, completed: false, subTodoItems: [] }, // Should use UUID for the ID here, but for simplicity, using timestamp
    ]);
  };

  const onToggleComplete = (id: number) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="App">
      <Layout>
        <Header />
        <Main>
          <AddTodo onSubmit={onSubmit} />
          <List
            title="Todo"
            items={items.filter((item) => !item.completed)}
            onToggleComplete={onToggleComplete}
          />
          <List
            title="Done"
            items={items.filter((item) => item.completed)}
            onToggleComplete={onToggleComplete}
          />
        </Main>
      </Layout>
    </div>
  );
}
