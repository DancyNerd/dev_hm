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

        const floute = "127.0.0.1:5000/cal";

        const postData = async(floute, datapack) => {

            const response = await fetch(floute, {
                method: 'POST', //function in Flask accepts POST
                mode: 'cors', //CORS is enabled in Flask
                cache: 'no-cache', //Truly I'm tired of clearing this anyway
                credentials: 'same-origin', //pretty sure it's right??
                headers: {
                    'Content-Type': 'application/json' //really, this has to be right
                },
                redirect: 'follow', //this might not actually be best practice?
                referrerPolicy: 'no-referrer', //whatever this means XD
                body: JSON.stringify(datapack)
            });
            return response.json();
        };

        postData(floute, datapack).then(data => {
            alert(data);
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