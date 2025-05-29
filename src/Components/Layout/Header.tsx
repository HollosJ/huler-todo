import styled from "styled-components";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <div className={className}>
      <img src="Logo.svg" alt="Huler Todo" />
    </div>
  );
};

const StyledHeader = styled(Header)`
  display: block;
  padding: 20px 20px 0;

  > img {
    height: 32px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.small}) {
    padding: 50px 20px 0;

    > img {
      height: 52px;
    }
  }
`;

export default StyledHeader;
