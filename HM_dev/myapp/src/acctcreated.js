import React, { Component } from 'react';


function AcctCreated({ theuser, thepassword }) {
    return (
        <h4>
            Below you will find your username and password.<br />
            {theuser}, {thepassword}
        </h4>
    );
}

export default AcctCreated;