import React from 'react'
import {
    Route,
    Redirect,
} from 'react-router-dom'
import store from '../store'
const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={(props) => (
        store.getState().isLogged
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
)

export default PrivateRoute