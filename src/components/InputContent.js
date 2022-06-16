import React from "react";
import styled, { keyframes } from "styled-components";

const caret = keyframes`
50% {
    border-color:  #1179f9;
}
`;

const StyledInputContent = styled.span.attrs((props) => ({
  contentEditable: "true",
  suppressContentEditableWarning: "true",
}))`
  caret-color: transparent;
  padding-right: 100%;
  outline: none;
  color: #1179f9;
  line-weight: 25px;
  height: 30px;
  border-right: 3px solid transparent;
  &::after {
    content: "";
    border-right: 3px solid transparent;
    animation: ${caret} 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
      infinite;
  }
`;

const InputContent = (props) => {
  return <StyledInputContent {...props} />;
};

export default InputContent;
