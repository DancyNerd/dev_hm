import React, { Component } from 'react';
import WeightForm from './useweight';
import CaloriesForm from './usecalor';

class UseMain extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {
        return (
            <p>
                <WeightForm />
                <CaloriesForm />
            </p>
        )
    }
}

export default UseMain;