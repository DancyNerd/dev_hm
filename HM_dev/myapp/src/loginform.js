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

        const floute = "127.0.0.1:5000/login";

        const datapack = {
            "username": username,
            "password": passcode
        };

        const postData = async(floute, datapack) => {

            const response = await fetch(floute, {
                method: 'POST', //login in Flask accepts POST
                mode: 'cors', //CORS is enabled in Flask
                cache: 'no-cache', //research this or at the very least ask the Wasteland
                credentials: 'same-origin', //this should be right, but research at some point
                headers: {
                    'Content-Type': 'application/json' //I think this is right? Again, research.
                },
                redirect: 'follow', //Ask the Wasteland
                referrerPolicy: 'no-referrer', //This should definitely be right, but could always verify.
                body: JSON.stringify(datapack)
            });
            return response.json();
        };

        postData(floute, datapack).then(data => {
            alert(data);
        });


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