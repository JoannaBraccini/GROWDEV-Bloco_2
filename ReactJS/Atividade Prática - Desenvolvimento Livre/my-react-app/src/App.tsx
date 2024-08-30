import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./configs/global/GloblaStyle";
import AppRoutes from "./configs/routes/AppRoutes";
import { darkTheme, lightTheme } from "./configs/themes";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
