import React from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        background: "white",
        margin: theme.spacing(1),
        width: 800,
      },
    },
    margin: {
      margin: theme.spacing(1),
      backgroundColor: "#2ebc4f",
      borderColor: "#2ebc4f",
    },
  })
);

function Login() {
  const classes = useStyles();
  return (
    <Box bgcolor="background.paper" borderRadius={8} width={500}>
      <div style={{ display: "flex", margin: 40 }}>
        <Grid container spacing={6} direction="column" alignItems="center">
          <Grid item xs={12} style={{ minWidth: "70%" }}>
            <TextField
              fullWidth
              required
              label="somebody@somewhere.com"
              id="outlined-basic"
              variant="outlined"
              helperText="Email"
            />
          </Grid>
          <Grid item xs={12} style={{ minWidth: "70%" }}>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              variant="outlined"
              helperText="Password"
            />
          </Grid>
          <Grid item xs={12} style={{ minWidth: "70%" }}>
            <Button
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              <Typography variant="h6" gutterBottom>
                Register or Login
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

export default Login;
