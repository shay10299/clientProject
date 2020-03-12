const axios = require('axios');

const getParticipants = (PartyID) => {
    const headers = {
        'x-auth-token': localStorage.getItem('token')
    }
    return axios({
        method: 'post',
        url: 'http://localhost:3001/api/party/PartyParticipants',
        headers,
        data: {
            PartyID: PartyID,
        }
    })

}

export default getParticipants

