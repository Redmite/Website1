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