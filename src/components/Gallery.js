import React from "react";
import Canvas from "./Canvas";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

//NEXT: HOW TO IMPORT FILES FROM THE ANIMATIONS FOLDER

//Import the graphics here:
import dots from "../animations/dots.json";
const spinningWheel = require("../animations/spinning_wheel.json");
//import spinningWheel from "../animations/spinning_wheel.json";

//Defining classes with MUI
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5),
    },
    width: "100vw",
  },
}));

//Gallery Component
export default function Gallery() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      className={classes.root}
      alignContent="center"
      justify="center"
      alignItems="center"
    >
      <Canvas animationTitle={dots.title} animation={dots.animation} />
      <Canvas
        animationTitle={spinningWheel.title}
        animation={spinningWheel.animation}
      />
    </Grid>
  );
}
