const axios = require('axios');

const getAllusers = (token) => {
    const headers = {
        'x-auth-token': token
    }
    return axios({
        method: 'get',
        url: 'http://localhost:3001/api/user/AllUsers',
        headers
    })

}

export default getAllusers