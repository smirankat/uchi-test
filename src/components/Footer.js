import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: calc(14px + 2vw);
  background-color: #f6f6f6;
  padding: 2rem;
  color: ${(props) => props.color};
`;

const Footer = (props) => {
  return <StyledFooter {...props} />;
};

export default Footer;
