import getAllParties from '../axiosRequests/getAllParties'

const FetchAllParties = async () => {
    try {
        const response = await getAllParties(localStorage.getItem('token'))
        return response

    }
    catch (error) {
        return "No parties found"
    }
}


export default FetchAllParties