const sqlInjectProtect = require('../sqlProtect.js') 

var email = 'mrfooder07@gmail.com'
var password = '722715'
var username = 'mrfooder07'

console.log(sqlInjectProtect.emailInjectProtect(email))
console.log(sqlInjectProtect.passwordInjectProtect(password))
console.log(sqlInjectProtect.usernameInjectProtect(username))