const axios = require('axios');

const ConfirmReq = (PartyID, UserID) => {
    const headers = {
        'x-auth-token': localStorage.getItem('token')
    }
    return axios({
        method: 'post',
        url: 'http://localhost:3001/api/EnterPartyReq/confirm',
        headers,
        data: {
            PartyID: PartyID,
            participantID: UserID
        }
    })

}

export default ConfirmReq

