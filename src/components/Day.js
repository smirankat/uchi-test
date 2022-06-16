import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const StyledDay = styled.div`
  text-align: center;
  line-height: ${(props) => props.lineHeight};
  font-weight: bold;
  cursor: pointer;
  font-size: ${(props) => props.size};
  width: ${(props) => props.width || "calc(16px + 3vw)"};
  padding: 1vw;
  border-radius: 50%;
  ${(props) =>
    props.isToday &&
    css`
      background-color: red;
      color: white;
    `}
  ${(props) =>
    props.isSelected &&
    css`
      border: 1px solid red;
    `}
`;

const Day = (props) => {
  return <StyledDay {...props} />;
};

export default Day;
