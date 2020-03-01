const tokenReducer = (state = '', action) => {
    switch (action.type) {
        case 'TOKEN':
            return state = action.token
        default:
            return state
    }

}

export default tokenReducer