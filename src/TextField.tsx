import React from 'react';
import styled from 'styled-components';
import { TextField, FormHelperText, Input } from '@material-ui/core';


function OurTextField() {
    return (
        <div>
            <TextField
                multiline
                variant="outlined"
                placeholder="hell"
                label='Dog'
                fullWidth
                helperText={<FormHelperText>Help Me!</FormHelperText>}
            ><Input
                 value="hello"
                />
            </TextField>
        </div>
    )
}

export default OurTextField;
