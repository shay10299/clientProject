import getParties from '../axiosRequests/getParties'

const FetchParties = async () => {
    try {
        const response = await getParties(localStorage.getItem('token'))
        return response
        
    }
    catch (error) {
        return "No parties found"
    }
}


export default FetchParties