import React, { Component } from 'react';

class AcctForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            emailAdd: '',
            height: '',
            weight: '',
            hsex: '',
            goal: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'selected' ? target.selected : target.value;
        const name = event.target.name;

        this.setState({
            ...this.state,
            [name]: value
        });
        
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.username);

    }

    /*componentDidMount() {
        fetch("http://127.0.0.1:5000/").then(console.log);
    }*/

    render() {
        const username = this.state.username;
        const emailAdd = this.state.emailAdd;
        const height = this.state.height;
        const weight = this.state.weight;
        const hsex = this.state.hsex;
        const goal = this.state.goal;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input 
                    type='text' 
                    name='username' 
                    value = {this.state.handleInputChange}
                    />
                </label><br />
                <label>
                    Email Address:
                    <input 
                    type='text' 
                    name='emailAdd' 
                    value={this.state.handleInputChange}
                    />
                </label><br />
                <label>
                    Height: 
                    <input 
                    name='height' 
                    type='number' 
                    value={this.state.handleInputChange}
                    />
                </label><br />
                <label>
                    Weight: 
                    <input 
                    name='weight' 
                    type='number' 
                    value={this.state.handleInputChange}
                    />
                </label><br />
                <label>
                    Hormonal Sex: 
                    <select 
                    name='hsex'
                    selected={this.state.handleInputChange}
                    >
                        <option value="F">
                            Female
                        </option>
                        <option value="M">
                            Male
                        </option>
                    </select>
                </label><br />
                <label>
                    Goal: 
                    <input 
                    name='goal' 
                    type='number' 
                    value={this.state.handleInputChange}
                    />
                </label><br />
                <input type='submit' />

            </form>
        );
    }
}

export default AcctForm;