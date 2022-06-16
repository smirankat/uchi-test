import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  padding: 2rem;
  color: ${(props) => props.color};
`;

const Title = (props) => {
  return <StyledTitle {...props} />;
};

export default Title;
