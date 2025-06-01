import styled from "styled-components";
import { TodoItem } from "../types";
import Todo from "./Todo";

interface ListProps {
  className?: string;
  title: string;
  items: TodoItem[];
  onToggleComplete: (id: string, parentId?: string) => void;
  onAddSubTodo: (parentId: string, name: string) => void;
}

const List = ({
  className,
  title,
  items,
  onToggleComplete,
  onAddSubTodo,
}: ListProps) => {
  return (
    <div className={className}>
      <h2>{title}</h2>

      {items.length > 0 ? (
        <ul>
          {items.map((item) => {
            return (
              <Todo
                item={item}
                key={item.id}
                onToggleComplete={onToggleComplete}
                onAddSubTodo={onAddSubTodo}
              />
            );
          })}
        </ul>
      ) : (
        <span className="no-tasks-found">No tasks found!</span>
      )}
    </div>
  );
};

const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey2};
  padding: 30px 0;

  & > h2 {
    font-weight: 700;
    font-size: 24px;
    color: ${(props) => props.theme.colors.grey3};
    margin-bottom: 20px;
  }

  & > ul {
    display: grid;
    gap: 20px;
  }

  .no-tasks-found {
    font-size: 20px;
    color: ${(props) => props.theme.colors.grey3};
    text-align: center;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.small}) {
    & > ul {
      gap: 50px;
    }
  }
`;

export default StyledList;
