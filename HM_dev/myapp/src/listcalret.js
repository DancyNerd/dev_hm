import React, { Component } from 'react';

/*
This should be in the form of a list that can be selected from.
-drop down or all at once??
-send selection back to python back end
-makes selection and returns calorie results
-probably needs to go in some kind of db for graphing purposes
-consider storing per day and updating quantities of that day until the day is over
-graph plots by day
*/

class CalRet extends Component  {
    constructor(props) {
        super(props);

        this.state = {
            foodlist: []
        };
    }

    render() {
        return (
            <React.Fragment>
                <ul className="list-group">
                    {this.state.foodlist.map(foodlist => (
                        <li key={foodlist.product}>
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

export default CalRet;