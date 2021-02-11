import React, { Component } from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your value ' + this.state.value);
        event.preventDefault();

    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/login").then(console.log);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                </label>
                <input type='text' name='username' value={this.state.value} onChange={this.handleChange} /><br />
                <label>
                    Password:
                </label>
                <input type='text' name='passcode' />
                <input type='submit' value='Submit' />
            </form>
        );
    }
}



export default LoginForm;