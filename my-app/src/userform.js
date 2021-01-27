import React from 'react';


function loginForm(){
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