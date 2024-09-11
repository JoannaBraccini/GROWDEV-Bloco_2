import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: #fff;
  box-shadow: 2px 3px 2px 2px rgba(49, 49, 49, 0.5);

  @media (max-width: 480px) {
    padding: 0 14px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 16px;

    img {
      height: 80px;

      @media (max-width: 480px) {
        height: 70px;
      }
    }

    h1 {
      font-family: var(--header-font);
      font-size: 65px;
      font-weight: bolder;

      @media (max-width: 768px) {
        font-size: 50px;
      }
      @media (max-width: 500px) {
        display: none;
      }
    }
  }
  nav {
    font-family: var(--text-font);
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    a {
      &:hover {
        color: #7d6bad;
      }
    }
  }
`;
