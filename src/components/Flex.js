import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "space-around"};
  align-items: ${(props) => props.align || "stretch"};
  width: ${(props) => props.width};
  margin: ${({ margin }) => margin || "0"};
  background: ${(props) => props.backgroundColor || "white"};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
`;

const Flex = (props) => {
  return <StyledFlex {...props} />;
};

export default Flex;
