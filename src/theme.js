import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palate: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#f5f5f5",
    },
    text: {
      primary: "#333",
      secondary: "#777",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 14,
  },
});
