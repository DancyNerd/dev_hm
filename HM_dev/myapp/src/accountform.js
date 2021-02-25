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

        const floute = "127.0.0.1:5000/newuser";

        const datapack = {
            'username': username,
            'emailAdd': emailAdd,
            'height': height,
            'weight': weight,
            'hsex': hsex,
            'goal': goal
        };

        const postData = async(floute, datapack) => {
            const response = await fetch(floute, {
                method: 'POST', //login in Flask accepts POST
                mode: 'cors', //CORS is enabled in Flask
                cache: 'no-cache', //rsrch
                credentials: 'same-origin', //rsrch
                headers: {
                    'Content-Type': 'application/json' //rsrch
                },
                redirect: 'follow', //rsrch
                referrerPolicy: 'no-referrer', //rsrch
                body: JSON.stringify(datapack)
            });
            return response.json();
        };

        postData(floute, datapack).then(data => {
            alert(data);
        });

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
                <label align='left'><br />
                    Username:
                    <input 
                    type='text' 
                    name='username' 
                    onChange = {this.handleInputChange}
                    value = {username}
                    />
                </label>
                <label align='right'>
                    Email Address:
                    <input 
                    type='text' 
                    name='emailAdd' 
                    value={emailAdd}
                    onChange={this.handleInputChange}
                    />
                </label><br />
                <label align='left'>
                    Height: 
                    <input 
                    name='height' 
                    type='number'
                    value={height}
                    onChange={this.handleInputChange}
                    />
                </label>
                <label align='right'>
                    Weight: 
                    <input 
                    name='weight' 
                    type='number' 
                    value={weight}
                    onChange={this.handleInputChange}
                    />
                </label><br />
                <label align='left'>
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
                </label>
                <label align='right'>
                    Goal: 
                    <input 
                    name='goal' 
                    type='number' 
                    value={goal}
                    onChange={this.handleInputChange}
                    />
                </label><br />
                <input align='center' type='submit' />

            </form>
        );
    }
}

export default AcctForm;