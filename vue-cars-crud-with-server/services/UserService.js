function checkLogin(email, password) {
    axios.post('http://localhost:3000/checklogin', {
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

function signUp(email, password, name) {
    axios.post('http://localhost:3000/signup', {
        email: email,
        password: password,
        name: name
    })
    .then(function (response) {     
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default {
    checkLogin,
    signUp
}