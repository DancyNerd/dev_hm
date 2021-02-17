import React, { Component } from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            passcode: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            ...this.state,
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { username, passcode } = this.state;
        alert(`submitted username ${username}
                        password ${passcode}`);

        const floute = "127.0.0.1:5000/login"

        const datapack = {
            "username": username,
            "password": passcode
        };


    }

    /*componentDidMount() {
        fetch("http://127.0.0.1:5000/login").then(console.log);
    }*/

    render() {
        const username = this.state.username;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type='text' name='username' value={username} onChange={this.handleChange} />
                </label><br />
                <label>
                    Password:
                    <input type='text' name='passcode' value={this.state.passcode} onChange={this.handleChange} />
                </label><br />
                <input type='submit' value='Submit' />
            </form>
        );
    }
}



export default LoginForm;