const axios = require('axios');

const DeleteUser = (formIDvalue) => {
    const headers = {
        'x-auth-token': localStorage.getItem('token')
    }
    return axios({
        method: 'post',
        url: 'http://localhost:3001/api/user/DeleteUser',
        headers,
        data: {
            id: formIDvalue
        }
    })

}

export default DeleteUser