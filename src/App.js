import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DefaultLayout from './DefaultLayout/DefaultLayout';
import Login from './components/Auth/Login';

// const DefaultLayout = React.lazy(() => import('./DefaultLayout'));

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>}/>
                <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
