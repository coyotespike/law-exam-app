import React from 'react';
import styled from 'styled-components';
import { TextField, FormHelperText, Input } from '@material-ui/core';


function OurTextField() {
    return (
        <div>
            <TextField
                multiline
                placeholder="hell"
                label='Dog'
                helperText={<FormHelperText>Help Me!</FormHelperText>}
            ><Input
                 value="hello"
                />
            </TextField>
        </div>
    )
}

export default OurTextField;
