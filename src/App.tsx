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
    subTodoItems: [{ id: 1, name: "Buy card", completed: false }],
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
  const [items, setItems] = useState(initialItems);
  const [completedItems] = useState(initialCompletedItems);

  const onSubmit = (name: string) => {
    if (!name.trim()) return;

    const itemId = Date.now(); // Should use UUID here, but for simplicity, using timestamp

    setItems([...items, { id: itemId, name }]);
  };

  return (
    <div className="App">
      <Layout>
        <Header />
        <Main>
          <AddTodo onSubmit={onSubmit} />
          <List title="Todo" items={items} />
          <List title="Done" items={completedItems} />
        </Main>
      </Layout>
    </div>
  );
}
