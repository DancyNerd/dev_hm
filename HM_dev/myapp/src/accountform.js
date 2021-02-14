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
        const value = target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            [name]: value
        });
        
    }

    handleSubmit(event) {
        const { username, emailAdd, height, weight, hsex, goal } = this.state;
        event.preventDefault();
        alert(`Username: ${username}
                         ${emailAdd}
                         ${height}
                         ${weight}
                         ${hsex}
                         ${goal}`);

        const datapack = {
            'username': username,
            'emailAdd': emailAdd,
            'height': height,
            'weight': weight,
            'hsex': hsex,
            'goal': goal
        };

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
                    onChange = {this.handleInputChange}
                    value = {username}
                    />
                </label><br />
                <label>
                    Email Address:
                    <input 
                    type='text' 
                    name='emailAdd' 
                    value={emailAdd}
                    onChange={this.handleInputChange}
                    />
                </label><br />
                <label>
                    Height: 
                    <input 
                    name='height' 
                    type='number'
                    value={height}
                    onChange={this.handleInputChange}
                    />
                </label><br />
                <label>
                    Weight: 
                    <input 
                    name='weight' 
                    type='number' 
                    value={weight}
                    onChange={this.handleInputChange}
                    />
                </label><br />
                <label>
                    Hormonal Sex: 
                    <select 
                    name='hsex'
                    value={hsex}
                    onChange={this.handleInputChange}
                    >
                        <option>

                        </option>
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
                    value={goal}
                    onChange={this.handleInputChange}
                    />
                </label><br />
                <input type='submit' />

            </form>
        );
    }
}

export default AcctForm;