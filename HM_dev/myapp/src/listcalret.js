import React, { Component } from 'react';

//Returns list of selectable options based on user's calorie input.

function CalRet ({ results}) {

    return (
        <p>
            Found it! {results.map(function(d, ind){
                return(<li key={ind}>{d.product}</li>)
            })}
        </p>
    );
}


export default CalRet;