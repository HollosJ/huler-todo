import { styled } from "styled-components";
import Handle from "./Handle";
import { TodoItem } from "../types";
import PlusCircle from "/Plus_Circle.svg";
import { useState } from "react";

interface TodoProps {
  className?: string;
  item: TodoItem;
  onToggleComplete: (id: string, parentId?: string) => void;
  onAddSubTodo: (parentId: string, name: string) => void;
}

const Todo = ({
  className,
  item,
  onToggleComplete,
  onAddSubTodo,
}: TodoProps) => {
  const [showSubTodoInput, setShowSubTodoInput] = useState(false);
  const [subTodoName, setSubTodoName] = useState("");

  const handleAddSubTodo = () => {
    if (!subTodoName.trim()) return;

    onAddSubTodo(item.id, subTodoName);
    setSubTodoName("");
    setShowSubTodoInput(false);
  };

  return (
    <li className={className}>
      <div className="todo-header">
        <div className="todo-header__left">
          <Handle />

          <div>
            <h3 className={`${item.completed ? "completed" : ""}`}>
              {item.name}
            </h3>

            {!item.completed && (
              <button
                className="add-sub-todo"
                onClick={() => setShowSubTodoInput((prev) => !prev)}
                aria-label={
                  showSubTodoInput ? "Cancel Adding Subtask" : "Add Subtask"
                }
              >
                <img
                  src={PlusCircle}
                  alt=""
                  style={{ transform: showSubTodoInput ? "rotate(45deg)" : "" }}
                />{" "}
                {showSubTodoInput ? "Cancel" : "Add Subtask"}
              </button>
            )}
          </div>
        </div>

        <button
          onClick={() => onToggleComplete(item.id)}
          aria-label="Toggle task completed"
          className={`toggle-complete-btn ${
            item.completed ? "toggle-complete-btn--completed" : ""
          }`}
        ></button>
      </div>

      <div className="sub-todo-items">
        {/* Sub Items */}
        {item.subTodoItems.length > 0 && (
          <ul className="">
            {item.subTodoItems.map((subTodoItem) => (
              <li
                key={subTodoItem.id}
                className={subTodoItem.completed ? "completed" : ""}
              >
                {subTodoItem.name}

                <button
                  className={`toggle-complete-btn ${
                    subTodoItem.completed
                      ? "toggle-complete-btn--completed"
                      : ""
                  }`}
                  onClick={() => {
                    onToggleComplete(subTodoItem.id, item.id);
                  }}
                ></button>
              </li>
            ))}
          </ul>
        )}

        {showSubTodoInput && !item.completed && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddSubTodo();
            }}
          >
            <input
              type="text"
              value={subTodoName}
              onChange={(e) => setSubTodoName(e.target.value)}
              placeholder="Enter Subtask"
              required
              autoFocus
            />
          </form>
        )}
      </div>
    </li>
  );
};

const StyledTodo = styled(Todo)`
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey4};
  border-radius: 20px;

  .todo-header {
    display: flex;
    gap: 20px;
    padding: 20px;

    align-items: center;
    justify-content: space-between;

    &__left {
      display: flex;
      gap: 28px;
      align-items: center;
      flex: 1;
    }
  }

  .todo-header h3 {
    font-weight: 700;
    font-size: 20px;
  }

  /* Reusable style for both parent and child todos */
  .toggle-complete-btn {
    width: 40px;
    height: 40px;
    transition: ${(props) => props.theme.transitions.default};
    background: url("Task_Empty.svg") no-repeat center;
    background-size: cover;

    &:not(&--completed):hover {
      background: url("Task_Hover.svg") no-repeat center;
      background-size: cover;
    }

    &--completed {
      background: url("Task_Selected.svg") no-repeat center;
      background-size: cover;
    }
  }

  .completed {
    text-decoration: line-through;
  }

  .add-sub-todo {
    background: none;
    color: ${(props) => props.theme.colors.grey3};
    margin-top: 15px;
    display: flex;
    align-items: center;
    font-size: 20px;
    gap: 8px;
  }

  .add-sub-todo img {
    transition: ${(props) => props.theme.transitions.default};
  }

  .sub-todo-items {
    padding: 0 20px;
  }

  .sub-todo-items li {
    font-size: 20px;
    font-weight: 700;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
      border-bottom: 1px solid ${(props) => props.theme.colors.grey1};
    }
  }

  .sub-todo-items .toggle-complete-btn {
    width: 36px;
    height: 36px;
  }

  form {
    padding: 30px 0;
    width: 100%;
    border-top: 1px solid ${(props) => props.theme.colors.grey1};
  }

  form input {
    background: none;
    border: none;
    outline: none;
    font-size: 20px;
    color: ${(props) => props.theme.colors.grey3};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.small}) {
    font-size: 20px;

    /* When sub todo form, or sub todo items present, increase bottom padding */
    &:has(.sub-todo-items li),
    &:has(.sub-todo-items form) {
      padding-bottom: 20px;
    }

    .toggle-complete-btn {
      width: 50px;
      height: 50px;
    }

    .todo-header {
      padding: 40px 50px;
    }

    .todo-header h3 {
      font-size: 28px;
    }

    .sub-todo-items {
      padding: 0 50px;
    }

    .sub-todo-items li {
      padding: 25px 0;
    }

    .sub-todo-items .toggle-complete-btn {
      width: 36px;
      height: 36px;
    }
  }
`;

export default StyledTodo;
