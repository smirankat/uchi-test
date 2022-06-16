import React from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  color: #1179f9;
  font-size: 25px;
  width: 80%;
  padding: 5px;
  margin: 2rem auto;
  border: 1px solid #ccc;
  background-color: white;
`;

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
