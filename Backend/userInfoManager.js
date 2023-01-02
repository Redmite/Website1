const sqlP = require('./sqlProtect.js');
const db = require('./dbBroker.js');

function newAccount(EMAIL, USERNAME, PASSWORD, LASTNAME, FIRSTNAME) {
    if (sqlP.emailInjectProtect(EMAIL) && sqlP.passwordInjectProtect(PASSWORD) && sqlP.usernameInjectProtect(USERNAME) && sqlP.nameInjectProtect(LASTNAME) && sqlP.nameInjectProtect(FIRSTNAME)) {
        console.log('passed');
        db.dbNewAccount(EMAIL, USERNAME, PASSWORD, LASTNAME, FIRSTNAME);
    } else {
        console.log('failed'); //REPLACE FOR ERROR RETURN
    }
}

function login(EMAIL, PASSWORD) {
    if (sqlP.emailInjectProtect(EMAIL) && sqlP.passwordInjectProtect(PASSWORD)) {
        console.log('passed');
        if (db.login(EMAIL, PASSWORD)) {
            console.log('Login success!');
        }
    } else {
        console.log('failed'); //REPLACE FOR ERROR RETURN
    }
}

module.exports = {newAccount, login};