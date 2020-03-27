const axios = require('axios');

const validateLogin = (token) => {
    const headers = {
        'x-auth-token': token
    }
    return axios({
        method: 'post',
        url: 'http://192.168.99.100:3001/api/user/validate',
        headers
    })
}

export default validateLogin