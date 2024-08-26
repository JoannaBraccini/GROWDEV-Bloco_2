import styled from "styled-components";
import banner from "../assets/banner.jpg";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25rem;
  width: 100%;
  text-align: center;

  background: url(${banner}) no-repeat top center;
  background-size: cover;

  h1 {
    color: #fff;
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    height: 10rem;
    h1 {
      font-size: 1.8rem;
    }
  }
`;
