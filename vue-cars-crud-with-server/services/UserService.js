function checkLogin(email, password) {
    axios.post('/checklogin', {
        email: email,
        password: password
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default {
    checkLogin
}