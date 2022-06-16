import React from "react";
import styled from "styled-components";

const StyledArrow = styled.button`
  border: none;
  background-color: transparent;
  font-size: 35px;
  font-weight: 400;
  cursor: pointer;
  color: ${(props) => props.color || "red"};
`;

const Arrow = (props) => {
  return <StyledArrow {...props} />;
};

export default Arrow;
