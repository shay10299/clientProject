const axios = require('axios');

const validateAdmin = (token) => {
    const headers = {
        'x-auth-token': token
    }
    return axios({
        method: 'post',
        url: 'http://192.168.99.100:3001/api/user/validateAdmin',
        headers
    })
}

export default validateAdmin