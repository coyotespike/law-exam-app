import React from 'react';
import { TextField, Input } from '@material-ui/core';

// the span below used to be FormHelperText, but this produces an error in StrictMode
// >-(

function OurTextField() {
    const [text, setText] = React.useState('Write your essay here')
    const [wordCount, setWordCount] = React.useState(0)

    function handleChange(e: any) {
        setText(e.target.value)
        setWordCount(text.split(/\s+/).length)
    }

    return (
        <div>
            <TextField
                multiline
                variant="outlined"
                placeholder="hell"
                label='Dog'
                fullWidth
                helperText={<span>{wordCount}</span>}
                onChange={handleChange}
            ><Input
                 value={text}
                />
            </TextField>
        </div>
    )
}

export default OurTextField;
