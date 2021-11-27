import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";

//Defining classes with MUI
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "fixed",
    display: "flex",
    bottom: 0,
    left: 0,

    [theme.breakpoints.up("xl")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },

  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 10.5,
    },
  },

  link: {
    color: theme.palette.primary.light,
  },
}));

//Footer Component
export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="subtitle2" noWrap>
            Developed by{" "}
            <Link href="https://gabrieldonas.com" className={classes.link}>
              Gabriel Donas
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
