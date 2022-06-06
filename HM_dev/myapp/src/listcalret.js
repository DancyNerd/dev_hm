import React, { Component } from 'react';

//Returns list of selectable options based on user's calorie input.

function CalRet ({ resultsArr }) {
    return (
        <p>
            Found it!
            <ul>
                {resultsArr.map(item => {
                    return <li>item</li>;
                })}
            </ul>
        </p>
    );
}


export default CalRet;