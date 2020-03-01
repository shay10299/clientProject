export const logIn = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const logOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}
export const tokenInsert = (token) => {
    return {
        type: 'TOKEN',
        token
    }
}
