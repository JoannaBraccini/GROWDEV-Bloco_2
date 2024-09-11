import styled from "styled-components";
import book from "../../assets/backgrounds/bookbg.webp";

export const Book = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: auto;
  gap: 12px;
  max-width: 480px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: url(${book}) center;
  background-size: cover;

  h1 {
    font-family: var(--title-font);
    font-size: 34px;
    text-shadow: 2px 2px 2px white;
  }

  h4 {
    font-family: var(--footer-font);
    font-size: 16px;
    text-shadow: 2px 2px 2px white;
  }

  h5 {
    font-family: var(--header-font);
    font-size: 30px;
  }

  p {
    font-family: var(--text-font);
    text-shadow: 2px 2px 2px whitesmoke;
    font-size: 20px;
    text-align: justify;
    background-color: rgba(255, 255, 255, 0.4);
    padding: 20px;
    border-radius: 20px;
  }

  @media screen and (max-width: 768px) {
    margin: 20px 0;
  }
`;
