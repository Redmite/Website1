function emailInjectProtect(EMAIL) {
    const re = /^[a-zA-Z0-9@.]+$/;
    if (re.test(EMAIL)) {
        return true;
    } else {
        return false;
    }
}

function passwordInjectProtect(PASSWORD) {
    const re = /^[a-zA-Z0-9]+$/;
    if (re.test(PASSWORD)) {
        return true;
    } else {
        return false;
    }
}

function usernameInjectProtect(USERNAME) {
    const re = /^[a-zA-Z0-9-_\/]+$/;
    if (re.test(USERNAME)) {
        return true;
    } else {
        return false;
    }
}

function nameInjectProtect(STRING) {
    const re = /^[a-zA-Z0-9]+$/;
    if (re.test(STRING)) {
        return true;
    } else {
        return false;
    }
}


function generalInjectProtect(STRING) {
    const re = /^[a-zA-Z0-9 ]+$/;
    if (re.test(STRING)) {
        return true;
    } else {
        return false;
    }
}

module.exports = {emailInjectProtect, passwordInjectProtect, usernameInjectProtect, nameInjectProtect, generalInjectProtect};

//var email = 'mrfooder07@gmail.com'
//var password = '722715'
//var username = 'mrfooder07'

//console.log(emailInjectProtect(email))
//console.log(passwordInjectProtect(password))
//console.log(usernameInjectProtect(username))