import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  button: {
    color: theme.palette.common.white,
    height: 60,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography className={classes.title} variant="h5" noWrap>
          Animation Samples
        </Typography>
        <Button
          className={classes.button}
          href="https://github.com/GabrielDonas"
        >
          <GitHubIcon fontSize="large" />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
