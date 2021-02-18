import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import MainForm from './mainform';
import AcctForm from './accountform';
import LoginForm from './loginform';
import SettingForm from './settingsform';
import UseMain from './usemain';
import './index.css';

function AppRouting() {

    const username = 'fakeusername';

    return (
        <Router>
            <div>
                <nav align='left'>
                    <ul>
                        <li>
                            <Link to='/'>Main Page</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/newuser'>Account Creation</Link>
                        </li>
                        <li>
                            <Link to='/u'>User Main Page</Link>
                        </li>
                        <li>
                            <Link to='/settings'>Settings</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path='/u'>
                        <h2>Welcome</h2>
                        <UseMain />
                    </Route>
                    <Route path='/login'>
                        <h2>Login Here</h2>
                        <LoginForm />
                    </Route>
                    <Route path='/newuser'>
                        <h2> Create New Account</h2>
                        <AcctForm />
                    </Route>
                    <Route path='/settings'>
                        <h2>Settings</h2>
                        <SettingForm />
                    </Route>
                    <Route path='/'>
                        <h2>HOME</h2>
                        <MainForm />
                    </Route>
                </Switch>
            </div>
        </Router>
    )

}




export default AppRouting;