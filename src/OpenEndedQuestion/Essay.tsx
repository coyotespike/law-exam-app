import React from "react";
import Paper from "@material-ui/core/Paper";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export default function Essay({ prompt }: { prompt: string }) {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={1} variant="outlined" className={classes.paper}>
        {prompt}
      </Paper>
    </>
  );
}
