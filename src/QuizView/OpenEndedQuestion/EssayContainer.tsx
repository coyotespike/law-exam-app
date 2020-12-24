import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Drawer from "../../Drawer";
import Essay from "./Essay";
import TextField from "./TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

export default function SpacingGrid(props: any) {
  const classes = useStyles();
  return (
    <>
      <Drawer />
      <div className={classes.root}>
        <Grid container spacing={0} alignItems="stretch">
          <Grid item xs>
            <Essay prompt={props.prompt} />
          </Grid>
          <Grid item xs>
            <TextField />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
