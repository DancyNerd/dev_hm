import React from 'react';

function handleChange(evt) {
    //const value = evt.target.value;
    setState({
        ...state, 
        [evt.target.name]:value
    });
}

function nameValidate(evtVal) {
    return false;
}

function passValidate(evtVal) {
    return false;
}

function handleSubmit(event) {
    event.preventDefault();
    evtName = event.target.name;
    evtVal = event.target.value;

    var nVal = false;
    var pVal = false;

    if (evtName = "username") {
        nVal = nameValidate(evtVal);
    }
    if (evtName = "passcode") {
        pVal = passValidate(evtVal);
    }

    return false;
}

function loginForm() {

    const [state, setState] = React.useState({
        username:"", 
        passcode:""
    });

    return (
        <form
        ref="logForm"
        onSubmit="handleSubmit"
        >
            <label>
                Username
                <input 
                type="text" 
                name="username" 
                value={state.username} 
                onChange={handleChange}
                />
            </label>
            <label>
                Password
                <input 
                type="text" 
                name="passcode" 
                value={state.passcode} 
                onChange={handleChange}
                />
            </label>
            <button type="submit" onSubmit={handleSubmit}>
                Submit
            </button>
        </form>
    );
}





export default loginForm;

