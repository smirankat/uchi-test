import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  padding: 20px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
`;

const Modal = (props) => {
  return <StyledModal {...props} />;
};

export default Modal;
