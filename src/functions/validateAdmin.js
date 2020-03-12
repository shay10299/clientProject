import validateAdmin from '../axiosRequests/validateAdmin'
const validate = async () => {
    try {
        await validateAdmin(localStorage.getItem('token'))
    }
    catch (error) {
        localStorage.removeItem('token')
        window.location.reload();
    }

}

export default validate