import React from "react";
import styled, { css } from "styled-components";

const StyledTableCell = styled.td`
  font-weight: 400;
  cursor: pointer;
  color: ${(props) => props.color || "green"};
  width: calc(100% / 7);
  height: ${(props) => props.height || "calc(100%/12)"};
  background: ${(props) => props.backgroundColor};
  background-clip: content-box;
  box-shadow: ${(props) => props.boxShadow || "inset 0 0 0 2px white"};
  border-left: 1px solid white;
  border-right: ${(props) => props.borderRight || " 1px solid #ddd"};
  border-bottom: ${(props) => props.borderBottom || "1px solid #ddd"};
  word-break: break-all;
  text-align: center;
  ${(props) =>
    props.isSelectedTd &&
    css`
      background-color: #b2b6fc;
      color: white;
    `}
`;

const TableCell = (props) => {
  return <StyledTableCell {...props} />;
};

export default TableCell;
