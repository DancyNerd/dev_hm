import React, { Component } from 'react';

class UsageForm extends React.Component() {
    constructor(props) {
        super(props);

        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('value: ' +this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <form>
                <label>
                    Weight:
                    <input name='weight' />
                </label>
                <label>
                    Calories:
                </label>
            </form>
        );
    }

}

export default UsageForm;