import styled from "styled-components";

const Handle = styled.button`
  background: none;
  border: none;
  -webkit-appearance: none;
  cursor: grab;
  width: 17px;
  height: 28px;
  flex-shrink: 0;
  background-image: url("Handle.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  touch-action: none; //https://github.com/clauderic/dnd-kit/issues/435#issuecomment-905879502

  &:active {
    cursor: grabbing;
  }
`;

export default Handle;
