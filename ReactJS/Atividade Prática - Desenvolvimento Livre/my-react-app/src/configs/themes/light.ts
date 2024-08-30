import { DefaultTheme } from "styled-components";

const login = "login";
// const home = "home";
// const about = "about";

//criar uma condicional que busque a rota para designar a variável correspondente.

export const lightTheme: DefaultTheme = {
  backgroundColor: "#F49003",
  backgroundImage: `url(../src/assets/images/bg-light-${login}.svg)`,
  textColor: "#000",
  colorPrimary: "#DF5A05",
  colorSecondary: "#FABD12",
};
