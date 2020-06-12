import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2f4858" //bleu marine (+ foncé)
    },
    secondary: {
      main: "#33658a" //bleu foncé 
    },
    error: {
      main: "#f26419" //orange foncé
    },
    background: {
      default: "#2f4858",
      secondary: "#33658a"
    },
    text: {
      primary: "#86bbd8", //light blue
      secondary: "#f6ae2d", //orange
      black: "#000000"
    },
    spacing: 8
  }
});

export default theme;