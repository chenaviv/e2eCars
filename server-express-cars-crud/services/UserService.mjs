import fs from 'fs';
import shortid from 'shortid';

const FILE_NAME = 'users.json'

function getUsers() {
    return new Promise((resolve, reject) => {
        fs.readFile(FILE_NAME, 'utf8', (err, strUsers) => {
            if (err) {
                reject(err);
            } else {
                var users = JSON.parse(strUsers)
                resolve(users)
            }
        })
    });
}

function checkLogin(userLog) {
    return getUsers()
        .then(users => {
            const user = users.find(user => {
                return user.email === userLog.email && user.password === userLog.password
            })
            if (user) return user
            else throw new Error(`User email and password did not match`)
        })
}

function signUp(newUser) {
    return getUsers()
        .then(users => {
            newUser.id = shortid.generate()
            users.push(newUser)
            return _saveUsers(users).then(_=> newUser)
        })
}

function _saveUsers(users) {
    return new Promise((resolve, reject) => {
        var strUsers = JSON.stringify(users)
        fs.writeFile(FILE_NAME, strUsers, 'utf8', (err, data) => {
            if (err) reject(err)
            else resolve()
        })
    });
}

export default {
    checkLogin,
    signUp
}