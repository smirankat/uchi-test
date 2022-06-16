import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Table = (props) => {
  return <StyledTable {...props} />;
};

export default Table;
