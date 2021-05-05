import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const palette = require("./style/palette.json");

const theme = createMuiTheme(palette);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Gallery />
      </ThemeProvider>
    </>
  );
}

export default App;
