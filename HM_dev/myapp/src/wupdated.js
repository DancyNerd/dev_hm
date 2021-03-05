import React, { Component } from 'react';

function DBUpdated({ message, streak }) {
    return (
        <h4>
            {message} and your streak is {streak}
        </h4>
    );
}


export default DBUpdated;