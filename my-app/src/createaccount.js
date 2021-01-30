import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

/*
Account creation
height
weight
hormonal sex
email
username
--triggers passcode functionality
session_id?
level set to 1
goal


*/

/*
Each input element has an onchange function
That function will ultimately take the event as input
and pass the value attached to the event, probably
to the set state function.
After that and each input is tied to the variable
the last thing you need is a function that will 
reference those things and send those values
using post/fetch.
Add data validation.
*/

class AccountForm extends React.Component {
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

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'select' ? 
        target.selected : target.value;
        const name = target.name;

        this.setState({
            [name]:value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
        <Form 
        ref="acctform" 
        onSubmit={this.handleSubmit}
        >
            <label>
                Username
                <input 
                type="text" 
                name="username" 
                value={this.state.username} 
                onChange={this.handleInputChange}
                />
            </label><br />

            <label>
                Email Address
                <input 
                type="text" 
                name="emailAdd" 
                value={this.state.emailAdd} 
                onChange={this.handleInputChange}
                />
            </label><br />

            <label>
                Height (centimeters only)
                <input 
                type="number" 
                name="height" 
                value={this.state.height} 
                onChange={this.handleInputChange}
                />
            </label><br />

            <label>
                Weight
                <input 
                type="number" 
                name="weight" 
                value={this.state.weight} 
                onChange={this.handleInputChange}
                />
            </label><br />

            <label data-tip data-for="hormSex">
                Hormonal Sex
                <select name="hsex" 
                onChange={this.handleInputChange} 
                value={this.state.hsex}
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
                Goal
                <input 
                type="number" 
                name="goal" 
                value={this.state.goal} 
                onChange={this.handleInputChange}
                />
            </label>

            <ReactTooltip id="hormSex" place="top" effect="solid">
                We need to know what hormones your body has the highest percentage of, 
                so we can calculate your BMR as accurately as possible. We understand 
                that this might not accurately reflect your gender or lack thereof.
            </ReactTooltip>
        </Form>
        );
    }



}




export default new AccountForm();