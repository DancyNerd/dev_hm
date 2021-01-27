import React, { useState} from 'react';
import ReactTooltip from 'react-tooltip';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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

function accountForm() {
    const [state, setState] = React.useState ({
        username: "",
        emailAdd: "",
        hsex: "",
        weight: "",
        height: ""
    });

    return(
        <form>
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
                <select named="hsex" 
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
                type="text" 
                name="weight" 
                value={state.weight} 
                onChange={handleChange}
                />
            </label><br />

            <label>
                Height
                <input 
                type="text" 
                name="height" 
                value={state.height} 
                onChange={handleChange}
                />
            </label>

            <ReactTooltip id="hormSex" place="bottom" effect="solid">
                We need to know what hormones your body has the highest percentage of,<br />
                so we can calculate your BMR as accurately as possible. We understand <br />
                that this might not accurately reflect your gender or lack thereof.
            </ReactTooltip>
        </form>
    );
}

function handleChange(evt) {
    const value = evt.target.value;
    setState9({
        ...state, 
        [evt.target.name]: value
    });
}


export default accountForm;