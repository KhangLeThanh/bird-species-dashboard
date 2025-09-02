import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2e7d32",
    },
    secondary: {
      main: "#ff9800",
    },
    background: {
      default: "#f5f9f6",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
});

export default customTheme;
