import React, { Component } from 'react';


function AcctSuccess(data) {
    return (
        <h4>
            Congratulations! Your account has successfully been created.<br />
            {data}
        </h4>
    );
}

export default AcctSuccess;