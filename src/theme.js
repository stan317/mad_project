import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1d3557" //bleu marine (+ foncé)
    },
    secondary: {
      main: "#457b9d" //bleu foncé 
    },
    error: {
      main: "#f86624" //orange foncé
    },
    background: {
      default: "#1d3557",
      secondary: "#45b9d"
    },
    text: {
      primary: "#a8dadc", //light blue
      secondary: "#f86634", //orange
      black: "#000000"
    },
    spacing: 8
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#33658a"
      }
    }
  }

});

export default theme;