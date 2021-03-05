import React, { Component } from 'react';
import WeightForm from './useweight';
import CaloriesForm from './usecalor';
import LoginForm from './loginform';
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import UseGraph from './graphing';

class UseMain extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            useris: props.location.state.id
        }

        console.log(this.useris);

        const propTypes = {
            match: PropTypes.object.isRequired,
            location: PropTypes.object.isRequired,
            history: PropTypes.object.isRequired
        };

        console.log(props.match.params);

    }

    render() {
        const { match, location, history } = this.props;
        const useris = this.state.useris;
        return (
            <div>
                How are you feeling today, {useris}?
                <WeightForm useris={useris} />
                <CaloriesForm useris={useris} /><br />
            </div>
        )
    }
}

export default withRouter(UseMain);