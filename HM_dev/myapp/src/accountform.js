import React, { Component } from 'react';
import axios from 'axios';
import AcctCreated from './acctcreated';

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
        this.AcctSuccess = this.AcctSuccess.bind(this);

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

    AcctSuccess(useris, passwordis) {
        this.setState({
            newAccountUser: useris,
            newAccountPW: passwordis
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

        const floute = "http://127.0.0.1:5000/newuser";

        /*
        const datapack = {
            'username': username,
            'emailAdd': emailAdd,
            'height': height,
            'weight': weight,
            'hsex': hsex,
            'goal': goal
        };
        */

        axios.post(floute, {
            'username': `${username}`,
            'emailAdd': `${emailAdd}`,
            'height': `${height}`,
            'weight': `${weight}`,
            'hsex': `${hsex}`,
            'goal':`${goal}`
        })
        .then((response) => {
                var useris = response.data.username;
                var passwordis = response.data.password;
                this.AcctSuccess(useris, passwordis);
        })
        .catch(function (error) {
            console.log(error);
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
            <div>
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
                {this.state.newAccountUser && this.state.newAccountPW && <AcctCreated theuser={this.state.newAccountUser} thepassword={this.state.newAccountPW} />}
            </div>
        );
    }
}

export default AcctForm;