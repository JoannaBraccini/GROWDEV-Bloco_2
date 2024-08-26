import styled from "styled-components";

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 70px;
    height: auto;
    margin: 0 auto;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h3 {
      font-size: 24px;
      padding: 1rem;
    }

    p {
      padding: 0 2rem;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;
