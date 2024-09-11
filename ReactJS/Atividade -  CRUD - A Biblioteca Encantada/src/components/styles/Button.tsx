import styled from "styled-components";

type TSize = "small" | "medium" | "large";
type TVariant = "light" | "dark" | "error";

interface ButtonProps {
  size?: TSize;
  variant?: TVariant;
}

const variantColors = {
  light: {
    background: "#cf9795",
    hover: "#f7bdc4",
    hoverColor: "#9d5552",
  },
  dark: {
    background: "#849380",
    hover: "#a1b29f",
    hoverColor: "#2e552d",
  },
  error: {
    background: "#733A22",
    hover: "#c49578",
    hoverColor: "#733A22",
  },
};

export const Button = styled.button<ButtonProps>`
  color: #ffff;
  background-color: ${(props) =>
    variantColors[props.variant || "light"].background};
  border: none;
  border-radius: 60px;
  box-shadow: 0 0 0 2px rgb(255, 132, 253, 0.5);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  margin: 10px;

  &:hover {
    color: ${(props) => variantColors[props.variant || "light"].hoverColor};
    background-color: ${(props) =>
      variantColors[props.variant || "light"].hover};
    opacity: 80%;
  }

  &:disabled {
    background-color: #3333;
    border: 1px #3333 solid;
    box-shadow: none;
    cursor: auto;
  }

  padding: ${(props) => (props.size === "small" ? "12px 17px;" : "18px 28px;")};
`;
