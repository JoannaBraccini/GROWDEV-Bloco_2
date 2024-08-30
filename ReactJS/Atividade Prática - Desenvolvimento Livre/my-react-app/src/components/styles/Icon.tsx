import styled from "styled-components";

export const Icon = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  padding: 4rem;
  align-items: center;
  justify-items: center;

  img {
    width: 100px;
    height: 100px;
    padding: 1rem;

    &:hover {
      scale: 1.2;
      transition: all 0.4s ease-out;
    }
  }
`;
