import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";

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
  link: {
    color: theme.palette.primary.light,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="subtitle2" noWrap>
            Animations by{" "}
            <Link
              href="https://www.behance.net/mayarapicoli"
              className={classes.link}
            >
              Mayara Picoli
            </Link>{" "}
            | Developed by{" "}
            <Link href="https://gabrieldonas.com" className={classes.link}>
              Gabriel Donas
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
