import React from 'react';
import Paper from '@material-ui/core/Paper';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import TextField from './TextField'
import Drawer from './Drawer'
import Container from './EssayContainer'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export default function Essay() {
    const classes = useStyles();
    return (
        <>
            <Drawer />
            <Container>
                <Paper elevation={1} variant="outlined" className={classes.paper}>
                    hello how are you
                </Paper>
                <TextField />
            </Container>
        </>
    )
}
