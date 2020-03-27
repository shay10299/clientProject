const axios = require('axios');

const getParties = (token) => {
    const headers = {
        'x-auth-token': token
    }
    return axios({
        method: 'get',
        url: 'http://192.168.99.100:3001/api/party/myParties',
        headers
    })

}

export default getParties