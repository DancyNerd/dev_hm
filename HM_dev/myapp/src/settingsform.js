import React, { Component } from 'react';

class SettingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hsex: '',
            goal: '',
            username: '',
            emailAdd: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
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
        alert("This doesn't work yet, sorry.");

        /*
        const floute="http://127.0.0.1:5000/settings";
        axios.post(floute, {
            `${evnt}`:`${evntvalue}
        })
        .then(r=>console.log(r.data))
        .catch(function (error) {
            console.log(error);
        });
        */
    }
    
    /*
    componentDidMount() {
        fetch("http://127.0.0.1:5000/settings").then(r=>r.text()).then(function (text) {
            alert(`${text}`);
        });
    }
    */

    render() {

        const hsex = this.state.hsex;
        const goal = this.state.goal;
        const username = this.state.username;
        const emailAdd = this.state.emailAdd;

        return(
            <form onSubmit={this.handleSubmit}>
                <label align='left'><br />
                    Change Hormonal Sex
                    <input
                    type='text'
                    name='hsex'
                    onChange={this.handleInputChange}
                    value = {hsex}
                    />
                </label>
                <label align='right'>
                    Change Goal
                    <input 
                    type='number'
                    name='goal'
                    onChange={this.handleInputChange}
                    value={goal}
                    />
                </label><br />
                <label align='left'>
                    Change Username
                    <input 
                    type='text'
                    name='username'
                    onChange={this.handleInputChange}
                    value={username}
                    />
                </label>
                <label align='right'>
                    Change Email Address
                    <input 
                    type='text'
                    name='emailAdd'
                    onChange={this.handleInputChange}
                    value={emailAdd}
                    />
                </label><br />
                <input align='center' type='submit' />
            </form>
        );
    
    }
}

export default SettingForm;