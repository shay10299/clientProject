const axios = require('axios');

const login = (formEvalue, formPvalue) => {
    return axios({
        method: 'post',
        url: 'http://192.168.99.100:3001/api/user/login',
        data: {
            email: formEvalue,
            password: formPvalue
        }
    })

}

export default login