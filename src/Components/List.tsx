import styled from "styled-components";
import Todo from "./Todo";
import { Item } from "../types";

interface ListProps {
  className?: string;
  title: string;
  items: Item[];
}

const List = ({ className, title, items }: ListProps) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => {
          return <Todo name={item.name} key={item.id} />;
        })}
      </ul>
    </div>
  );
};

const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey2};
  padding: 30px 0;

  h2 {
    font-weight: 700;
    font-size: 24px;
    color: ${(props) => props.theme.colors.grey3};
    margin-bottom: 20px;
  }

  & > ul {
    display: grid;
    gap: 20px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.small}) {
    & > ul {
      gap: 50px;
    }
  }
`;

export default StyledList;
