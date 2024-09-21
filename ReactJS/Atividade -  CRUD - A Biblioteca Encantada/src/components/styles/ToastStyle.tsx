import styled from "styled-components";

interface ToastStyleProps {
  type: "success" | "error";
}

export const ToastStyle = styled.section<ToastStyleProps>`
  position: fixed;
  top: 70px;
  left: 20px;
  background-color: ${({ type }) =>
    type === "success" ? "#4caf50" : "#f44336"};
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  .success {
    background-color: #4caf50;
  }

  .error {
    background-color: #f44336;
  }

  .progress {
    height: 4px;
    background-color: #fff;
    border-radius: 2px;
    transition: width 0.1s linear;
  }
`;
