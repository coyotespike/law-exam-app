import React, { Component } from 'react';

function Login() {
    return <Input/>
}

class Input extends Component {
    render() {
        return (
            <div>
                <label htmlFor="username"> username: </label>
                <input type="text" id="username" />
            </div>
        )
    }
}

export default Login;
