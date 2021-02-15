import React from 'react';

class CaloriesForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            calories: ''
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
        const { calories } = this.state;
        event.preventDefault();
        alert(`calories: ${calories}`)
        
        const datapack = {
            'calories': calories
        };

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