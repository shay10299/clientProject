const axios = require('axios');

const validateAdmin = (token) => {
    const headers = {
        'x-auth-token': token
    }
    return axios({
        method: 'post',
        url: 'http://localhost:3001/api/user/validateAdmin',
        headers
    })
}

export default validateAdmin