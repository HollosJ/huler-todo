import { FormEvent, useState } from "react";
import styled from "styled-components";

interface AddTodoProps {
  className?: string;
  onSubmit: (name: string) => void;
}

const AddTodo = ({ className, onSubmit }: AddTodoProps) => {
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
  margin-top: 63px;
  margin-bottom: 75px;
  z-index: ${(props) => props.theme.zLayers.overlay};
  overflow: hidden;
  display: flex;
  gap: 26px;
  width: 100%;
  font-weight: 300;

  input {
    padding: 20px 50px;
    height: 70px;
    background-color: ${(props) => props.theme.colors.grey2};
    border: 2px solid ${(props) => props.theme.colors.grey1};
    border-radius: 999px;
    outline: none;
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 20px;
    flex: 1;
    &::placeholder {
      color: ${(props) => props.theme.colors.text};
      font-weight: 300;
    }

    &:focus-visible {
      border: 2px solid ${(props) => props.theme.colors.grey3};
    }
  }

  button {
    width: 70px;
    height: 70px;
    border-radius: 999px;
    border: none;
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:before {
      content: "";
      background-image: url("Plus.svg");
      background-size: contain;
      background-repeat: no-repeat;
      width: 32px;
      height: 32px;
    }
  }
`;

export default StyledAddTodo;
