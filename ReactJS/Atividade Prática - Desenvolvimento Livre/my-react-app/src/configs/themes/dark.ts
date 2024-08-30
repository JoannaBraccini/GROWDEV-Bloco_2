import { DefaultTheme } from "styled-components";

const login = "login";
// const home = "home";
// const about = "about";

//criar uma condicional que busque a rota para designar a variável correspondente.

export const darkTheme: DefaultTheme = {
  backgroundColor: "#363157",
  backgroundImage: `url(../src/assets/images/bg-dark-${login}.svg)`,
  textColor: "#fff",
  colorPrimary: "#221E3E",
  colorSecondary: "#807B9F",
};
