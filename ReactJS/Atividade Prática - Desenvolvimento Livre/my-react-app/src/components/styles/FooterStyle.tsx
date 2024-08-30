import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  position: fixed;
  bottom: 0;

  h1 {
    font-size: 2rem;
    font-variant: small-caps;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 660px) {
    div {
      flex-direction: column;
      align-items: end;
    }
  }
`;
