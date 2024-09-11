import styled from "styled-components";

interface BannerProps {
  background: string;
}

export const MainBanner = styled.section<BannerProps>`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 50px;
  color: #b76548;
  text-shadow: 4px 4px 10px black;

  background: ${(props) => `url(${props.background})`};
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  p {
    font-family: "Julee", cursive;
    font-weight: bold;
    color: #d2c1b9;
    text-shadow: 3px 3px 5px #161418;
    font-size: 40px;
    padding-bottom: 60px;
  }

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;
