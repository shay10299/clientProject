const axios = require('axios');

const register = (formEvalue, formPvalue, formNvalue, formAvalue) => {
    return axios({
        method: 'post',
        url: 'http://192.168.99.100:3001/api/user/register',
        data: {
            username: formNvalue,
            email: formEvalue,
            age: formAvalue,
            password: formPvalue
        }
    })

}

export default register