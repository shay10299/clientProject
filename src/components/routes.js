import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import loginPage from '../pages/loginPage';
import registerPage from '../pages/registerPage'
import home from '../pages/homePage'
import PrivateRoute from './privateRoute'
import allPartiesPage from '../pages/allPartiesPage'
import CreatePartyPage from '../pages/createPartyPage'
function Router() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={loginPage} exact />
                    <Route path="/register" component={registerPage} exact />

                    <PrivateRoute path="/home" component={home} exact />
                    <PrivateRoute path="/AllParties" component={allPartiesPage} exact />
                    <PrivateRoute path="/CreatePartyPage" component={CreatePartyPage} exact />

                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Router;
