import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Poppins", sans-serif;
        background: ${({ theme }) => theme.backgroundImage} no-repeat center;
        background-size: cover;
        color: ${({ theme }) => theme.textColor};
        min-height: 100vh;
        display:flex;
        flex-direction: column;
    }

    a {
        text-decoration: none;
    }
    `;
