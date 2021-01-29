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

function userForm(){
    const[state, setState] = React.useState({
        weight: "",
        foodlog: "",
    });

    return (
        <form>
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
        </form>
    )
}







export default userForm;