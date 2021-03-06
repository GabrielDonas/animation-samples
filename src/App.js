import React from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

//Material UI Custom Palette
const palette = require("./style/palette.json");

const theme = createMuiTheme(palette);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Title />
        <Gallery />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
