import validateAdmin from '../axiosRequests/validateAdmin'
const validate = async () => {
    try {
        await validateAdmin(localStorage.getItem('token'))
        return true
    }
    catch (error) {
        return false
    }

}

export default validate