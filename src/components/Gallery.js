import React from "react";
import Canvas from "./Canvas";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

//Import the graphics here
import { animationList } from "../animations/animationList";

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
      {animationList.map((animation) => {
        return (
          <Canvas
            key={animation.id}
            animationTitle={animation.title}
            animation={animation.data}
          ></Canvas>
        );
      })}
    </Grid>
  );
}
