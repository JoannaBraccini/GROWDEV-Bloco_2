import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
  background-color: rgba(255, 255, 255, 0.6);

  p {
    font-family: "Playwrite FR Moderne", cursive;
  }

  nav {
    display: flex;
    gap: 16px;

    img {
      width: 50px;
      border-radius: 40%;
      cursor: pointer;

      &:hover {
        scale: 1.1;
        transition: all 0.2s;
      }
    }
  }
`;
