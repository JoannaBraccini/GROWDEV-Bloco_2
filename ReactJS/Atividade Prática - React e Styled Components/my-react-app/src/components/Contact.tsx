import styled from "styled-components";
import banner from "../assets/banner.jpg";

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15rem;
  width: 100%;
  text-align: center;

  background: url(${banner}) no-repeat top center;
  background-size: cover;
  transform: scaleX(-1);

  h2 {
    color: #fff;
    font-size: 3rem;
    transform: scaleX(-1);
  }

  @media (max-width: 768px) {
    height: 5rem;
    h2 {
      font-size: 1.2rem;
    }
  }
`;
