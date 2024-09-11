import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: auto;
  gap: 16px;
  max-width: 360px;
  padding: 20px;

  h1 {
    font-family: var(--title-font);
    font-size: 2em;
    color: #8b494b;
    text-shadow: 1px 1px 1px white;
  }

  p {
    font-family: var(--footer-font);
    font-size: 16px;
    font-weight: 600;
    color: #5c5970;
    text-shadow: 1px 1px 1px gray;
  }

  @media screen and (max-width: 768px) {
    margin: 20px 0;
  }
`;
