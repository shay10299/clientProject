import loggedReducer from './isLogged'
import tokenReducer from './tokenReducer'
import { combineReducers } from 'redux'


const allReducers = combineReducers({
    isLogged: loggedReducer,
    token: tokenReducer
})

export default allReducers