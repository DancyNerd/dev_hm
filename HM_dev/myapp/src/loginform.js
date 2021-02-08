import React, { Component } from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
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

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                </label>
                <input type='text' value={this.state.value} onChange={this.handleChange} /><br />
                <label>
                    Password:
                </label>
                <input type='text' />
                <input type='submit' value='Submit' />
            </form>
        )
    }
}



export default new LoginForm;