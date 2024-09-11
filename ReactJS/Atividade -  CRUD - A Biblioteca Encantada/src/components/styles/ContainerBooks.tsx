import styled from "styled-components";

export const ContainerBooks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
