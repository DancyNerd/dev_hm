import React, { Component } from 'react';

class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logbut: '',
            acctbut: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("This is just a pretend page.");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Login
                </label><br />
                <label>
                    Account Creation
                    <input type='submit' />
                </label><br />
            </form>
        )
    }
}

export default MainForm;