import { createTheme, ThemeProvider } from "@mui/material";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00FFFF ",
    },
    secondary: {
      main: green[500],
    },
  },
});

export const ThemeSesiones = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
