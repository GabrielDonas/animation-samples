import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Box } from "@material-ui/core";

//Defining classes with MUI
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: "1rem",
  },
  subTitle: {
    maxWidth: 900,
    marginTop: "1rem",
  },
}));

export default function Title() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4" color="secondary">
        <Box fontWeight="fontWeightBold" m={2} letterSpacing={3}>
          SVG Card Display
        </Box>
      </Typography>
      <Typography variant="body1" className={classes.subTitle}>
        A single-page application to showcase SVG animations and interact with
        them. <br />
        All of these animations were created in After Effects, exported with
        Bodymovin, and rendered natively.
      </Typography>
    </Container>
  );
}
