import React from "react";
import styled from "styled-components";

const StyledTime = styled.div`
  //   font-size: 16px;
  //   font-weight: 400;
  color: #bfbfbf;
  padding: 20px 5px 20px 15px;
`;

const Time = (props) => {
  return <StyledTime {...props} />;
};

export default Time;
