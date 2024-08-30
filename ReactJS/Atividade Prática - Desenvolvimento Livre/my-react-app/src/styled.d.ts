import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    backgroundImage: string;
    textColor: string;
    colorPrimary: string;
    colorSecondary: string;
  }
}
