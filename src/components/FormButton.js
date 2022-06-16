import React from "react";
import styled from "styled-components";

const StyledFormButton = styled.button`
  border: none;
  font-size: calc(14px + 2vw);
  width: 50%;
  font-weight: ${(props) => props.weight || "400"};
  text-align: center;
  color: #1179f9;
  border-top: 1px solid #69697b;
  border-right: ${(props) => props.borderRight};
  cursor: pointer;
  padding: 1rem;
  background-color: #e5e5e6;
`;

const FormButton = (props) => {
  return <StyledFormButton {...props} />;
};

export default FormButton;
