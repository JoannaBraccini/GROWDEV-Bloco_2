import { createGlobalStyle } from "styled-components";
import background from "../../assets/backgrounds/background.webp";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: 
          linear-gradient(
            rgba(255, 255, 255, 0.5), /* Cor e transparência da camada */
            rgba(255, 255, 255, 0.5)  /* Pode ajustar a cor e o nível de transparência */
          ),
          url(${background}) no-repeat center center;
        background-size: cover;
    }

    a{
        text-decoration: none;
    }

    label, input, button {
        font-family: "Poppins", sans-serif;
    }

    button {
        cursor: pointer;
    }

    :root {
        --default-font: "Poppins", sans-serif;
        --header-font: "Tangerine", cursive;
        --title-font: "Rancho", cursive;
        --text-font: "Julee", cursive;
        --footer-font: "Playwrite FR Moderne", cursive;
    }
    `;
