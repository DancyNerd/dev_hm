import axios from 'axios';
import React from 'react';
import CalRet from './listcalret';

class CaloriesForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            calories: '',
            useris: props.useris,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.itemsReturned = this.itemsReturned.bind(this);
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

    itemsReturned(message) {
        this.setState({
            updList: message,
        });
    }

    handleSubmit(event) {

        event.preventDefault();
        const { calories } = this.state;
        //alert('FOODDATA CENTRAL DB DOWN')
        

        const floute = "http://127.0.0.1:5000/cal";

        axios.post(floute, {
            'calories': `${calories}`,
        })
        .then((response)=> {
            var message = response.data;
            const CalRet = JSON.parse(message)
        })
        .catch(function(error) {
            console.log.bind(error);
        });

    }

    render() {
        //const calories = this.state.calories;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    What did you eat today?
                    <input 
                    type='text'
                    name='calories'
                    onChange={this.handleChange}
                    value={this.state.calories}
                    />
                </label>
                <input type='submit' /><br />
                {this.state.updList && <CalRet message={this.state.itemsReturned} />}
            </form>
        );
    }


}

export default CaloriesForm;