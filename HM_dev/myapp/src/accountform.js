import React, { Component } from 'react';

class AcctForm extends React.Component {
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
        event.preventDefault();
        alert("info was entered");

    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/newuser").then(console.log);
    }

    render() {
        return (
            <form>
                <label>
                    Username:
                    <input type='text' name='username' />
                </label><br />
                <label>
                    Email Address:
                    <input type='text' name='emailAdd' />
                </label><br />
                <label>
                    Height: 
                    <input name='height' />
                </label><br />
                <label>
                    Weight: 
                    <input name='weight' />
                </label><br />
                <label>
                    Hormonal Sex: 
                    <input name='hsex' />
                </label><br />
                <label>
                    Goal: 
                    <input name='goal' />
                </label><br />
                <input type='submit' onSubmit={handleSubmit} />
            </form>
        );
    }
}

export default AcctForm;