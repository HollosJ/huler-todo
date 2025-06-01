import { FormEvent, useState } from "react";
import styled from "styled-components";

interface AddTodoProps {
  className?: string;
  onSubmit: (name: string) => void;
}

export const AddTodo = ({ className, onSubmit }: AddTodoProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(name);
    setName("");
  };

  return (
    <form
      className={className}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        placeholder="Enter new Todo..."
        onChange={(e) => setName(e.target.value)}
        value={name}
        required
      />
      <button type="submit" />
    </form>
  );
};

const StyledAddTodo = styled(AddTodo)`
  margin: 70px auto;
  display: flex;
  gap: 26px;
  width: 100%;
  font-weight: 300;

  input {
    padding: 20px;
    width: 100%;
    height: 70px;
    background-color: ${(props) => props.theme.colors.grey2};
    color: ${(props) => props.theme.colors.text};
    border: 2px solid ${(props) => props.theme.colors.grey1};
    border-radius: 999px;
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 20px;
  }

  input:focus-visible {
    border: 2px solid ${(props) => props.theme.colors.grey3};
  }

  button {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.primary};
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:before {
    content: "";
    background-image: url("Plus.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 32px;
    height: 32px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.small}) {
    input {
      padding: 20px 50px;
    }
  }
`;

export default StyledAddTodo;
