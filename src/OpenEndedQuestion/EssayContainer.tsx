import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    }),
);

export default function SpacingGrid(props: any) {
    const classes = useStyles();
  return (
      <div className={classes.root}>
      <Grid container spacing={0} alignItems="stretch" >
      {props.children.map(( child: any, idx: number ) => (
          <Grid item xs key={idx}>
              { child }
          </Grid>
      ))}

      </Grid>
      </div>
  );
}
