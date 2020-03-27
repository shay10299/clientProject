const axios = require('axios');

const CreateEnterRequest = (formIDvalue) => {
    const headers = {
        'x-auth-token': localStorage.getItem('token')
    }
    return axios({
        method: 'post',
        url: 'http://192.168.99.100:3001/api/EnterPartyReq/create',
        headers,
        data: {
            PartyID: formIDvalue
        }
    })

}

export default CreateEnterRequest