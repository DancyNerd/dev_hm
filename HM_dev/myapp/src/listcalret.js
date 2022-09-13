import React, { Component } from 'react';
import Dropdown from 'react-boostrap/Dropdown';
import axios from 'axios';

//Returns list of selectable options based on user's calorie input.

class CalRet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dispVal: '',
            selection: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

    }

    handleChange(event) {
        const dispVal = event.dispVal;

        this.setState({
            ...this.state,
            [name]:value
        });
    }
    
    handleSelect(selection) {
        event.preventDefault();
        const selection = this.state;

        const floute = "http://127.0.0.1:5000/"
    }

}










export default CalRet;