import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: ${(props) => props.size || "50px"};
  width: ${(props) => props.width};
  font-weight: ${(props) => props.weight || "400"};
  text-align: center;
  line-height: ${(props) => props.height || "40px"};
  color: ${(props) => props.color || "red"};
  border: ${(props) => props.border};
  cursor: pointer;
  padding: ${(props) => props.padding};
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
