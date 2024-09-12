import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    .dark-mode {
        background-color: #3a3a3a;
         button{
            background-color: pink;
            &:hover{
                background-color:gray;
            }
        }

        h1{
            color: white;            
        }
    }

    .light-mode{
        background-color: white;

        button{
            background-color: gray;
            &:hover{
                background-color:pink;
            }
        }
    }

    
    a {
        text-decoration: none;  

    }
`;
