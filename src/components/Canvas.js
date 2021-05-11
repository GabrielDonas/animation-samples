import React, { useState } from "react";
import Animation from "./Animation";

//MUI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, Typography, IconButton } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseSharpIcon from "@material-ui/icons/PauseSharp";
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
export default function Canvas(props) {
  const classes = useStyles();

  //Animation Controls
  const [isPaused, setIsPaused] = useState(true);
  const [isStopped, setIsStopped] = useState(false);

  const handlePlay = () => {
    setIsStopped(false);
    setIsPaused(false);
  };

  const handleStop = () => {
    setIsStopped(true);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <Grid item md={4} xs={10}>
      <Card className={classes.card}>
        <Animation
          isStopped={isStopped}
          isPaused={isPaused}
          animation={props.animation}
        />
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          className={classes.title}
        >
          {props.animationTitle}
        </Typography>
        <div className={classes.control}>
          <IconButton aria-label="play animation" onClick={handlePlay}>
            <PlayArrowIcon fontSize="large" className={classes.controlButton} />
          </IconButton>
          <IconButton aria-label="pause animation" onClick={handlePause}>
            <PauseSharpIcon
              fontSize="large"
              className={classes.controlButton}
            />
          </IconButton>
          <IconButton aria-label="stop animation" onClick={handleStop}>
            <StopSharpIcon fontSize="large" className={classes.controlButton} />
          </IconButton>
        </div>
      </Card>
    </Grid>
  );
}
