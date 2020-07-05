import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path="/" exact />
            <Route component={Home} path="/home"/>
            <Route component={Register} path="/register"/>
            <Route component={Profile} path="/profile"/>
        </BrowserRouter>
    ) 
}

export default Routes;