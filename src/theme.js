import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#011627" //bleu foncé
    },
    secondary: {
      main: "#2ec4b6" //vert 
    },
    error: {
      main: "#e71d36" //rouge
    },
    background: {
      default: "#011627", //bleu foncé
      secondary: "#2ec4b6"
    },
    text: {
      primary: "#fdfffc", //blanc
      secondary: "#2ec4b6", //vert
    },
    spacing: 8
  },


  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#2ec4b6" //vert
      }
    },
    MuiButton: {
        root :{
            color: "#2ec4b6",
             '& $notchedOutline' : {
               notchedOutline:"#2ec4b6"
             },
            '&$disabled':{
              color: "#fdfffc" 
            }
        },
      },
  }


});

export default theme;