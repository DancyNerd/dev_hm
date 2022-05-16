import axios from 'axios';
import React, { Component } from 'react';
import UseMain from './usemain';
import DBUpdated from './wupdated';

//Displays weight entry form

//Class for props, state for weight entry form
class WeightForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weight: '',
            useris: props.useris
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.SUpdated = this.SUpdated.bind(this);
    }

    //function for on event, handle the change, update state
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            [name]: value
        });
    }

    //State is update to this
    SUpdated(message, streak) {
        this.setState({
            updMess: message,
            streak: streak
        });
    }

    //What happens when user selects submit
    handleSubmit(event) {
        event.preventDefault();
        const { weight } = this.state;
        const useris = this.state.useris;

        //Construct json for send to Flask server
        const datapack = {
            "useris":useris,
            "weight": weight
        };

        //ET phone home
        const floute = "http://127.0.0.1:5000/wsub";

        axios.post(floute, {
            'useris': `${useris}`, 
            'weight':`${weight}`
        })
        .then((response) => {
            var message = response.data.message;
            var streak = response.data.streak;
            this.SUpdated(message, streak);
        })
        .catch(function(error){
            console.log.bind(error);
        });
        

    }

    //Render function handles actual display segment
    render() {
        //const useris =  this.state.useris;
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Weight:
                    <input name='weight' 
                    type='number' 
                    value= {this.state.weight} 
                    onChange={this.handleChange}
                    />
                </label>
                <input type='submit' /><br />
                {this.state.updMess && <DBUpdated message={this.state.updMess} streak={this.state.streak} />}
            </form>
        );
    }

}

//Your pieces don't work if they are not exported
export default WeightForm;