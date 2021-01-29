import React, { useState} from 'react';
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

function handleChange(evt) {
    //const value = evt.target.value;
    setState({
        ...state, 
        [evt.target.name]: value
    });
}

function nameValidate(evtVal) {
    return false;
}

function emailValidate(evtVal) {
    return false;
}

function hsexValidate(evtVal) {
    return false;
}

function weightValidate(evtVal) {
    return false;
}

function heightValidate(evtVal) {
    return false;
}

function goalValidate(evtVal) {
    return false;
}

function handleSubmit(event) {
    event.preventDefault();
    evtName = event.target.name
    evtVal = event.target.value

    var nVal = False;
    var eaVal = False;
    var hVal = False;
    var wVal = False;
    var hsVal = False;
    var gVal = False;

    if (evtName=="username") {
        nVal = nameValidate(evtVal);
        if (nVal==false) {
            return "<p>username invalid</p>";
        }
    }

    if (evtName=="emailAdd") {
        eaVal = emailValidate(evtVal);
        if (eaVal==false) {
            return "<p>email address invalid</p>";
        }
    }

    if (evtName=="hsex") {
        hsVal = hsexValidate(evtVal);
        if (hsVal==false) {
            return "<p>stop trying to hack things</p>";
        }
    }

    if (evtName=="weight") {
        wVal = weightValidate(evtVal);
        if (wVal==false) {
            return "<p>weight invalid</p>";
        }
    }

    if (evtName=="height") {
        hVal = heightValidate(evtVal);
        if (hVal==false) {
            return "<p>height invalid</p>";
        }
    }

    if (evtName=="goal") {
        gVal = goalValidate(evtVal);
        if (gVal==false) {
            return "<p>goal invalid</p>";
        }
    }

    return"";
}


function accountForm() {
    const [state, setState] = React.useState ({
        username: "",
        emailAdd: "",
        hsex: "",
        weight: "",
        height: "", 
        goal:""
    });

    return(
        <Form 
        ref="acctform" 
        onSubmit={handleSubmit}
        >
            <label>
                Username
                <input
                type="text"
                name="username"
                value={state.username}
                onChange={handleChange}
                />
            </label><br />

            <label>
                Email Address
                <input
                type="text"
                name="emailAdd"
                value={state.emailAdd}
                onChange={handleChange}
                />
            </label><br />
            
            <label data-tip data-for="hormSex">
                Hormonal Sex
                <select name="hsex" 
                onChange={handleChange} 
                value={state.hsex}>
                    <option value="F">
                        Female
                    </option>
                    <option value="M">
                        Male
                    </option>
                </select>
            </label><br />

            <label>
                Weight
                <input
                type="number" 
                name="weight" 
                value={state.weight} 
                onChange={handleChange}
                />
            </label><br />

            <label>
                Height in CENTIMETERS
                <input 
                type="number" 
                name="height" 
                value={state.height} 
                onChange={handleChange}
                />
            </label>

            <label>
                Goal
                <input 
                type="number" 
                name="goal" 
                value={state.goal} 
                onChange={handleChange} 
                />
            </label>

            <Button type="submit" onSubmit={handleSubmit}>
                Submit Form
            </Button>

            <ReactTooltip id="hormSex" place="bottom" effect="solid">
                We need to know what hormones your body has the highest percentage of,<br />
                so we can calculate your BMR as accurately as possible. We understand <br />
                that this might not accurately reflect your gender or lack thereof.
            </ReactTooltip>
        </Form>
    );
}


export default accountForm;