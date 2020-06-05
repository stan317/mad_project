import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2f4858"
    },
    secondary: {
      main: "#33658a"
    },
    error: {
      main: "#f26419"
    },
    background: {
      default: "#2f4858",
      secondary: "#33658a"
    },
    text: {
      primary: "#86bbd8",
      secondary: "#f6ae2d",
      black: "#000000"
    },
    spacing: 8
  }
});

export default theme;