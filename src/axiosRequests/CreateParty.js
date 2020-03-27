const axios = require('axios');

const CreateParty = (formNvalue, formDvalue, formHvalue) => {
    const headers = {
        'x-auth-token': localStorage.getItem('token')
    }
    return axios({
        method: 'post',
        url: 'http://192.168.99.100:3001/api/party/create',
        headers,
        data: {
            PartyName: formNvalue,
            date: formDvalue,
            hour: formHvalue
        }
    })

}

export default CreateParty