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
        alert(`submitted username ${username}`);


    }

    /*componentDidMount() {
        fetch("http://127.0.0.1:5000/login").then(console.log);
    }*/

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                </label>
                <input type='text' name='username' value={this.state.username} onChange={this.handleChange} /><br />
                <label>
                    Password:
                </label>
                <input type='text' name='passcode' value={this.state.passcode} onChange={this.handleChange} />
                <input type='submit' value='Submit' />
            </form>
        );
    }
}



export default LoginForm;