const axios = require('axios');

const getParticipants = (PartyID) => {
    const headers = {
        'x-auth-token': localStorage.getItem('token')
    }
    return axios({
        method: 'post',
        url: 'http://192.168.99.100:3001/api/party/PartyParticipants',
        headers,
        data: {
            PartyID: PartyID,
        }
    })

}

export default getParticipants

