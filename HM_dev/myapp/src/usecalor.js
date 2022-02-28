import axios from 'axios';
import React from 'react';

class CaloriesForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            calories: '',
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
        });

    }

    handleSubmit(event) {

        event.preventDefault();
        const { calories } = this.state;
        //alert('FOODCENTRAL DB DOWN')
        

        const floute = "http://127.0.0.1:5000/cal";

        axios.post(floute, {
            'calories': `${calories}`,
        })
        .then((response)=> {
            var broken = response.data.message;
            alert(`${broken}`);
        })
        .catch(function(error) {
            console.log(error);
        });

    }

    render() {
        const calories = this.state.calories;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    What did you eat today?
                    <input 
                    type='text'
                    name='calories'
                    onChange={this.handleChange}
                    value={calories}
                    />
                </label>
                <input type='submit' /><br />
            </form>
        )
    }


}

export default CaloriesForm;