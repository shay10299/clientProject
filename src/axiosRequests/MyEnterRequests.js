const axios = require('axios');

const MyEnterRequests = (token) => {
    const headers = {
        'x-auth-token': token
    }
    return axios({
        method: 'get',
        url: 'http://localhost:3001/api/EnterPartyReq/myRequests',
        headers
    })

}

export default MyEnterRequests