const axios = require('axios');

const getParties = (token) => {
    const headers = {
        'x-auth-token': token
    }
    return axios({
        method: 'get',
        url: 'http://localhost:3001/api/party/myParties',
        headers
    })

}

export default getParties