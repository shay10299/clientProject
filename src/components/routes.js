import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import loginPage from '../pages/loginPage';
import registerPage from '../pages/registerPage'
import home from '../pages/homePage'
import PrivateRoute from './privateRoute'
import allPartiesPage from '../pages/allPartiesPage'
import CreatePartyPage from '../pages/createPartyPage'
import AllUsersPage from '../pages/AllUsersPage'
import DeleteUserPage from '../pages/DeleteUserPage'
import CreateEnterReqPage from '../pages/CreateEnterReqPage'
import MyEnterReqPage from '../pages/MyEnterReqPage'
import MyEnterReqToConfirmPage from '../pages/MyEnterReqToConfirmPage'

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
                    <PrivateRoute path="/AllUsers" component={AllUsersPage} exact />
                    <PrivateRoute path="/DeleteUser" component={DeleteUserPage} exact />
                    <PrivateRoute path="/CreateEnterReqPage" component={CreateEnterReqPage} exact />
                    <PrivateRoute path="/MyEnterReq" component={MyEnterReqPage} exact />
                    <PrivateRoute path="/MyEnterReqToConfirm" component={MyEnterReqToConfirmPage} exact />

                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Router;
