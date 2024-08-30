import styled from "styled-components";

interface ButtonProps {
  margin?: string;
}

export const DefaultButton = styled.button<ButtonProps>`
  height: fit-content;
  min-width: 5rem;
  margin: ${(props) => props.margin};

  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.colorSecondary};

  border-radius: 8px;
  padding: 10px;
  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colorSecondary};
    color: ${({ theme }) => theme.colorPrimary};
    border: 1px solid ${({ theme }) => theme.backgroundColor};
  }
`;
