const axios = require('axios');

const getAllParties = (token) => {
    const headers = {
        'x-auth-token': token
    }
    return axios({
        method: 'get',
        url: 'http://192.168.99.100:3001/api/party/allParties',
        headers
    })

}

export default getAllParties