import React, { Component } from 'react';
import UseMain from './usemain';

class WeightForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weight: '',
            useris: props.useris
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
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { weight } = this.state;
        alert(`weight: ${weight}`);

        const datapack = {
            "weight": weight
        };

        const floute = "127.0.0.1:5000/u";

        const postData = async(floute, datapack) => {
            
            const response = await fetch(floute, {
                method: 'POST', //login in Flask accepts POST
                mode: 'cors', //CORS is enabled in Flask
                cache: 'no-cache', //Might be for the best tho
                credentials: 'same-origin', //is it really tho
                headers: {
                    'Content-Type': 'application/json' //should be right
                },
                redirect: 'follow', //FIGURE THIS ONE OUT PLS
                body: JSON.stringify(datapack)
            });
            return response.json();
        };

        postData(floute, datapack).then(data => {
            alert(data);
        });

    }

    render() {
        const useris =  this.state.useris;
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    {useris} Weight:
                    <input name='weight' 
                    type='number' 
                    value= {this.state.weight} 
                    onChange={this.handleChange}
                    />
                </label>
                <input type='submit' /><br />
            </form>
        );
    }

}

export default WeightForm;