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
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UseMain } from "./usemain";

function AppRouting() {

    //const username = 'fakeusername';

    return (
        <Router>
            <div>
                <Nav variant="pills" align="left">
                <NavDropdown title="Menu" id="nav-dropdown">
                <nav align='left'>
                    <ul>
                        <Nav.Item>
                        <li>
                            <NavDropdown.Item><Link to='/'>Main Page</Link></NavDropdown.Item>
                        </li>
                        </Nav.Item>
                        <Nav.Item>
                        <li>
                            <NavDropdown.Item><Link to='/login'>Login</Link></NavDropdown.Item>
                        </li>
                        </Nav.Item>
                        <Nav.Item>
                        <li>
                            <NavDropdown.Item><Link to='/newuser'>Account Creation</Link></NavDropdown.Item>
                        </li>
                        </Nav.Item>
                        <Nav.Item>
                        <li>
                            <NavDropdown.Item><Link to='/u'>User Main Page</Link></NavDropdown.Item>
                        </li>
                        </Nav.Item>
                        <Nav.Item>
                        <li>
                            <NavDropdown.Item><Link to='/settings'>Settings</Link></NavDropdown.Item>
                        </li>
                        </Nav.Item>
                    </ul>
                </nav>
                </NavDropdown>
                </Nav>
                <Switch>
                    <Route path='/u'>
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