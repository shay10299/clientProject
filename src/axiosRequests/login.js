const axios = require('axios');

const login = (formEvalue, formPvalue) => {
    return axios({
        method: 'post',
        url: 'http://localhost:3001/api/user/login',
        data: {
            email: formEvalue,
            password: formPvalue
        }
    })

}

export default login