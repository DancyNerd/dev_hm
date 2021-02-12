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
        const name = target.name;

        this.setState({
            [name]:value
        });
        
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state);

    }

    /*componentDidMount() {
        fetch("http://127.0.0.1:5000/").then(console.log);
    }*/

    render() {
        return (
            <form>
                <label>
                    Username:
                    <input 
                    type='text' 
                    name='username' 
                    value = {this.state.onChange}
                    />
                </label><br />
                <label>
                    Email Address:
                    <input 
                    type='text' 
                    name='emailAdd' 
                    value={this.state.onChange}
                    />
                </label><br />
                <label>
                    Height: 
                    <input 
                    name='height' 
                    type='number' 
                    value={this.state.onChange}
                    />
                </label><br />
                <label>
                    Weight: 
                    <input 
                    name='weight' 
                    type='number' 
                    value={this.state.onChange}
                    />
                </label><br />
                <label>
                    Hormonal Sex: 
                    <select 
                    name='hsex'
                    selected={this.state.onChange}
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
                    <input name='goal' type='number' />
                </label><br />
                <input type='submit' onSubmit={this.handleSubmit} />

            </form>
        );
    }
}

export default AcctForm;