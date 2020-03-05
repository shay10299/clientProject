const axios = require('axios');

const getAllParties = (token) => {
    const headers = {
        'x-auth-token': token
    }
    return axios({
        method: 'get',
        url: 'http://localhost:3001/api/party/allParties',
        headers
    })

}

export default getAllParties