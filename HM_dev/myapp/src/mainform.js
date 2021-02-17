import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import AcctForm from './accountform';
import LoginForm from './loginform';

class MainForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("This is just a pretend page.");
    }

    render() {
        return (
            <form>
                <label>
                    <Link to='/login'>Login</Link>
                </label><br />
                <label>
                    <Link to='/newuser'> Account Creation</Link>
                </label><br />
                <Switch>
                    <Route exact path='/login'>
                        <h2>Login Here</h2>
                        <LoginForm />
                    </Route>
                    <Route path='/newuser'>
                        <h2>Create New Account</h2>
                        <AcctForm />
                    </Route>
                </Switch>
            </form>
        );
    }
}

export default MainForm;