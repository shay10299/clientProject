import getAllusers from '../axiosRequests/getAllusers'

const FetchAllusers = async () => {
    try {
        const response = await getAllusers(localStorage.getItem('token'))
        return response

    }
    catch (error) {
        return "No users found"
    }
}


export default FetchAllusers