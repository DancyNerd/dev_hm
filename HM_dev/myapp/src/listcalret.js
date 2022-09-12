import React, { Component } from 'react';

//Returns list of selectable options based on user's calorie input.

function CalRet ({ results}) {

    var dispRes = [];

    for(let i=0; i<results.length; i++) {
 
        console.log(results[i]);
        dispRes[i] = results[i][1];
    }

    return (
        <p>
            Found it! {dispRes.map(function(d, ind){
                return(<li key={ind}>{d.name}</li>)
            })}
        </p>
    );
}

/*
Array within an array is occurring.
Sort them into smaller arrays.
Examine the possibilities of using map or just calling by number.
*/

export default CalRet;