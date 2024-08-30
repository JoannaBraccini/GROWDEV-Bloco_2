import styled from "styled-components";

export const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: 0.5rem;
  padding: 3rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;
