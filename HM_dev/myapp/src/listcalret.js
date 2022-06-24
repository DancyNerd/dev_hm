import React, { Component } from 'react';

//Returns list of selectable options based on user's calorie input.

function CalRet ({ results }) {
    console.log(results);
    return (
        <p>
            Found it! {results.map(function(d, idx){
                return(<li key={idx}>{d.name}</li>)
            })}
        </p>
    );
}


export default CalRet;