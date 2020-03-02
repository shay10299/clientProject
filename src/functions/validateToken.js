import validateLogin from '../axiosRequests/validateLogin'
const validate = async () => {
    try {
        await validateLogin(localStorage.getItem('token'))
        return true
    }
    catch (error) {
        return false
    }

}

export default validate