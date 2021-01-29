import React from 'react';


function handleChange(evt) {
    //const value=evt.target.value;
    setState({
        ...state, 
        [evt.target.name]: value
    });
}

function handleSubmit() {
    return("something");
}

function weightSec() {
    return (
        <Form
        ref="weightForm" 
        onSubmit="handleSubmit"
        >
            <label>
                Today's Weight
                <input 
                type="number" 
                name="weight" 
                value={state.weight} 
                onChange={handleChange}
                />
            </label>
            <Button>
                Submit Weight
            </Button>
        </Form>
    );
}

function fdaSearch() {
    return (
        <Form 
        ref="calSearch" 
        onSubmit="handleSubmit"
        >
            <label>
                Search for calories here.
                <input 
                type="text" 
                name="calSeek" 
                value={state.calSeek} 
                onChange={handleChange} 
                />
            </label>
            <Button>
                Submit Search
            </Button>
        </Form>
    );
}

function calSec() {
    return (
        <Form 
        ref="calForm" 
        onSubmit="handleSubmit" 
        >
            <label>
                Calories
            </label>
        </Form>
    );
}

function userForm(){
    const[state, setState] = React.useState({
        weight: "",
        foodlog: "",
    });

    return (
        <Form>
            {weightSec}<br />
            {fdaSearch}<br />
            {calSec}<br />
        </Form>
    );
}







export default userForm;