
function LoginErrors({ username, password }) {
    var usercorrect = false;
    var userlen = username.length;
    if (userlen < 2) {
        usercorrect = false;
    }
    else {
        usercorrect = true;
    }
    
    var passcorrect = '';
    var passlen = password.length;
    if (passlen < 2) {
        passcorrect = false;
    }
    else {
        passcorrect = true;
    }
    return (usercorrect, passcorrect);
}
export default LoginErrors;