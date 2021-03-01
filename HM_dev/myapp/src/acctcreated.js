import React, { Component } from 'react';


function AcctCreated(theuser, thepassword) {
    return (
        <h4>
            Congratulations! Your account has successfully been created.<br />
            {theuser}, {thepassword}
        </h4>
    );
}

export default AcctCreated;