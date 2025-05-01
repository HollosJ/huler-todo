import { ReactNode } from "react";
import styled from "styled-components";

interface ContentContainerProps {
  className?: string;
  children?: ReactNode;
}

const ContentContainer = ({ className, children }: ContentContainerProps) => {
  return <div className={className}>{children}</div>;
};

const StyledContentContainer = styled(ContentContainer)`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 60px;
  max-width: 980px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.grey1};
  border-radius: 10px;

  @media (max-width: ${(props) => props.theme.breakpoints.large}) {
    width: 95%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 30px;
  }
`;

export default StyledContentContainer;
