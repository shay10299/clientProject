const axios = require('axios');

const CreateParty = (formNvalue, formDvalue, formHvalue) => {
    const headers = {
        'x-auth-token': localStorage.getItem('token')
    }
    return axios({
        method: 'post',
        url: 'http://localhost:3001/api/party/create',
        headers,
        data: {
            PartyName: formNvalue,
            date: formDvalue,
            hour: formHvalue
        }
    })

}

export default CreateParty