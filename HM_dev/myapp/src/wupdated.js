import React, { Component } from 'react';

//Fragment for updating logon streak (consecutive weight entry metric)
function DBUpdated({ message, streak }) {
    console.log(message);
    return (
        <h4>
            {message} and your streak is {streak}
        </h4>
    );
}


export default DBUpdated;