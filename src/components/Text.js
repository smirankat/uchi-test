import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  text-align: center;
  font-size: ${(props) => props.size || "20px"};
  font-weight: ${(props) => props.weight || "400"};
  line-height: ${(props) => props.height || "30px"};
`;

const Text = (props) => {
  return <StyledText {...props} />;
};

export default Text;
