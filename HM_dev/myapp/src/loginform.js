import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            passcode: '',
            isLogged: false,
            useris: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNotLog = this.handleNotLog.bind(this);
        this.handleLog = this.handleLog.bind(this);
    }

    handleLog(useris) {
        this.setState({
            isLogged: true,
            useris: useris
        });
    }

    handleNotLog(err, mess) {
        alert(`${err}${mess}`);
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

        const floute = "http://127.0.0.1:5000/login";

        axios.post(floute, {
            'username': `${username}`,
            'password':`${passcode}`
        })
        .then((response) => {
            if (response.data.Error) {
                var err = response.data.Error;
                var mess = response.data.message;
                this.handleNotLog(err, mess);
            }
            else {
                var useris = response.data.username;
                this.handleLog(useris);
            }
        })
        .catch(function(error) {
            alert(error);
        });
    }

    /*componentDidMount() {
        fetch("http://127.0.0.1:5000/login").then(console.log);
    }*/

    render() {
        const username = this.state.username;
        const useris = this.state.useris;
        if(this.state.isLogged) {
            return <Redirect to = {{ pathname: "/u", state: { id: `${useris}`}}} />;
        }
        else {
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
}

export default LoginForm;