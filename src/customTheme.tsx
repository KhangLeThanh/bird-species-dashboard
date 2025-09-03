import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme();

const customTheme = createTheme(baseTheme, {
  palette: {
    primary: { main: "#2e7d32" },
    secondary: { main: "#ff9800" },
    background: { default: "#f5f9f6" },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 600,
          padding: "6px 16px",
        },
        containedPrimary: {
          backgroundColor: "#2e7d32",
          "&:hover": { backgroundColor: "#1b5e20" },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          padding: baseTheme.spacing(2),
        },
      },
    },
  },
});

export default customTheme;
