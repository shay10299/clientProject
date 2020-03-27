const axios = require('axios');

const DeleteUser = (formIDvalue) => {
    const headers = {
        'x-auth-token': localStorage.getItem('token')
    }
    return axios({
        method: 'post',
        url: 'http://192.168.99.100:3001/api/user/DeleteUser',
        headers,
        data: {
            id: formIDvalue
        }
    })

}

export default DeleteUser