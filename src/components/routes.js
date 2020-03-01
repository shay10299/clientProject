import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import loginPage from '../pages/loginPage';
import registerPage from '../pages/registerPage'
import home from '../pages/homePage'
import PrivateRoute from './privateRoute'
function Router() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={loginPage} exact />
                    <Route path="/register" component={registerPage} exact />

                    <PrivateRoute path="/home" component={home} exact />

                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Router;
