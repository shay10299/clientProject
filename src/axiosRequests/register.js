const axios = require('axios');

const register = (formEvalue, formPvalue, formNvalue, formAvalue) => {
    return axios({
        method: 'post',
        url: 'http://localhost:3001/api/user/register',
        data: {
            username: formNvalue,
            email: formEvalue,
            age: formAvalue,
            password: formPvalue
        }
    })

}

export default register