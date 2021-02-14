import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function AppRouting() {
    return (
        <Router>
            <div>
                <nav>
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
                            <Link to='/settings'>Settings</Link>
                        </li>
                        <li>
                            <Link to='/u/<username'>User Main Page</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='u/<username>'>
                        <UseMain />
                    </Route>
                    <Route path='/login'>
                        <LoginForm />
                    </Route>
                    <Route path='/newuser'>
                        <AcctForm />
                    </Route>
                    <Route path='/settings'>
                        <Settings />
                    </Route>
                    <Route path='/'>
                        <MainForm />
                    </Route>
                </Switch>
            </div>
        </Router>
    )

}




export default AppRouting;