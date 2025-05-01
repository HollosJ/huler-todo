import Handle from "./Handle";

interface TodoProps {
  name: string;
}

const Todo = ({ name }: TodoProps) => {
  return (
    <li>
      <Handle />
      {name}
    </li>
  );
};

export default Todo;
