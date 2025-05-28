import styled from "styled-components";

const Handle = styled.button`
  background: none;
  border: none;
  -webkit-appearance: none;
  cursor: grab;
  width: 17px;
  height: 28px;
  background-image: url("Handle.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  &:active {
    cursor: grabbing;
  }
`;

export default Handle;
