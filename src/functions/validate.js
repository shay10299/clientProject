import validateLogin from '../axiosRequests/validateLogin'
const validate = async () => {
    try {
        await validateLogin(localStorage.getItem('token'))
    }
    catch (error) {
        localStorage.removeItem('token')
        window.location.reload();
    }

}

export default validate