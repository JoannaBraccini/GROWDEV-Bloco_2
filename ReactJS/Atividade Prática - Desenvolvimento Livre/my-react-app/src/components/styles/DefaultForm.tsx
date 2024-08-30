import styled from "styled-components";

export const DefaultForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 30rem;
  gap: 0.5rem;

  border: 1px solid ${({ theme }) => theme.backgroundColor};
  padding: 4rem 1rem;
  font-weight: 500;
  font-size: 1.3rem;

  background-color: rgba(0, 0, 0, 0.03);

  position: relative;
  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    border: 2px solid ${({ theme }) => theme.backgroundColor};
    transition: all 0.25s ease-out;
  }
  &::before {
    background-color: ${({ theme }) => theme.colorPrimary};
    top: -15px;
    left: -15px;
  }
  &::after {
    bottom: -15px;
    right: -15px;
  }
  &:hover {
    &::before {
      top: 15px;
      left: 15px;
    }
    &::after {
      bottom: 15px;
      right: 15px;
    }
  }

  label {
    padding-top: 2rem;
  }

  input {
    padding: 0.5rem;

    &:active,
    &:focus,
    &:hover {
      outline: none;
      border-bottom-color: ${({ theme }) => theme.colorSecondary};
    }
  }

  div {
    padding: 2rem;
    display: flex;
    justify-content: space-around;
  }
`;
