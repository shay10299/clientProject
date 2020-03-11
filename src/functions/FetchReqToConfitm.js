import MyEnterReqToConfirm from '../axiosRequests/MyEnterRequestToConfirm'

const FetchMyReqToConfirm = async () => {
    try {
        const response = await MyEnterReqToConfirm(localStorage.getItem('token'))
        return response

    }
    catch (error) {
        return "No requests found"
    }
}


export default FetchMyReqToConfirm