const axios = require('axios');

const MyEnterRequestToConfirm = (token) => {
    const headers = {
        'x-auth-token': token
    }
    return axios({
        method: 'get',
        url: 'http://localhost:3001/api/EnterPartyReq/myRequestsToConfirm',
        headers
    })

}

export default MyEnterRequestToConfirm