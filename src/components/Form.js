import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 80%;
  padding-top: 2rem;
  border: 1px solid #ccc;
  border-radius: 1em;
  background-color: #e5e5e6;
  overflow: hidden;
`;

const Form = (props) => {
  return <StyledForm {...props} />;
};

export default Form;
