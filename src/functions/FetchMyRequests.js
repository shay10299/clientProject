import MyEnterReq from '../axiosRequests/MyEnterRequests'

const FetchMyReq = async () => {
    try {
        const response = await MyEnterReq(localStorage.getItem('token'))
        return response

    }
    catch (error) {
        return "No requests found"
    }
}


export default FetchMyReq