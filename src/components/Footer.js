import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
//remove color from the hyperlink
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "fixed",
    display: "flex",
    //alignItems: "center",
    bottom: 0,
    left: 0,
    width: "100vw",
    //backgroundColor: theme.palette.primary.light,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="subtitle2" noWrap>
            Animations by Maya | Developed by
            <a href="https://gabrieldonas.com/"> Gabriel Donas</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
