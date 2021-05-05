import React from "react";
import Animation from "./../animations/Animation";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  IconButton,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopSharpIcon from "@material-ui/icons/StopSharp";

//Defining classes with MUI
const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "center",
    minWidth: 250,
    maxWidth: 500,
  },
  control: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: theme.spacing(1),
  },
  controlButton: {
    color: theme.palette.primary.light,
  },
  title: {
    //color: theme.palette.primary.light,
  },
}));

//Canvas Component
export default function Canvas() {
  const classes = useStyles();

  return (
    <Grid item md={4} xs={10}>
      <Card className={classes.card}>
        <Animation />
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          className={classes.title}
        >
          Spinning Wheel
        </Typography>
        <div className={classes.control}>
          <IconButton aria-label="add to favorites">
            <PlayArrowIcon fontSize="large" className={classes.controlButton} />
          </IconButton>
          <IconButton aria-label="share">
            <StopSharpIcon fontSize="large" className={classes.controlButton} />
          </IconButton>
        </div>
      </Card>
    </Grid>
  );
}
