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
    )
}

function userForm(){
    const[state, setState] = React.useState({
        weight: "",
        foodlog: "",
    });

    return (
        <Form>
            <label>
                Today's Weight
                <input 
                type="text" 
                name="weight" 
                value={state.weight} 
                onChange={handleChange} 
                />
            </label>
            <label>
                Today's Consumption
                <input 
                type="text" 
                name="foodlog" 
                value={state.weight} 
                onChange={handleChange} 
                />
            </label>
        </Form>
    )
}







export default userForm;