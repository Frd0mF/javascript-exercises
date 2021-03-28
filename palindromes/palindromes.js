const palindromes = function(string) {
    string = string.replace(/[&\/\\#,+()$~%.'":*?!<>{} ]/g, '');
    string = string.toLowerCase();
    stringSplit = string.split("");
    let palindrome = '';
    for (let i = string.length; i > 0; i--) {
        palindrome += string[i - 1];
    }
    if (palindrome == string) {
        return true
    } else {
        return false
    }
}

module.exports = palindromes