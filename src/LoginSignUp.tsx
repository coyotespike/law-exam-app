import React from "react";
import styled from "styled-components";
import { Button, Container, Grid, TextField } from "@material-ui/core";

function LoginBox() {
  return (
    <Container maxWidth="sm">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <TextField variant="outlined" label="username">
            username
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField variant="outlined" label="password">
            password
          </TextField>
        </Grid>
        <Grid container item xs={4} spacing={2}>
          <Grid item xs={6}>
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="secondary">
              Signup
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
const Box = styled(LoginBox)``;

export default Box;
