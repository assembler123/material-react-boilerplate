import React from 'react';
import {BrowserRouter as  Router, Route , Switch } from 'react-router-dom';
import BottomNav from './components/BottomNav'
const Routes = () => {
    return (<Router>
        <Switch>
            <Route exact path='/' >
                <BottomNav/>    
            </Route>
        </Switch>
    </Router>);
    }
export default Routes;