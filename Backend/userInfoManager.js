const sqlP = require('./sqlProtect.js');

function newAccount(EMAIL, USERNAME, PASSWORD, LASTNAME, FIRSTNAME) {
    if (sqlP.emailInjectProtect(EMAIL) && sqlP.passwordInjectProtect(PASSWORD) && sqlP.usernameInjectProtect(USERNAME) && sqlP.nameInjectProtect(LASTNAME) && sqlP.nameInjectProtect(FIRSTNAME)) {
        console.log('passed');
    } else {
        console.log('failed');
    }
}

module.exports = {newAccount};