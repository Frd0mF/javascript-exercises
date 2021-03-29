const caesar = function(string, shift) {
    let shifted = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i].match(/[&\/\\#,+()$~%.'":*?!<>{} ]/)) {
            shifted += string[i];
        } else {
            let unicode = string.charCodeAt(i);
            if (unicode >= 65 && unicode <= 90) {
                unicode += shift
                while (unicode > 90) {
                    unicode -= 26;
                }
                while (unicode < 65) {
                    unicode += 26;
                }
            }
            if (unicode >= 97 && unicode <= 122) {
                unicode += shift
                while (unicode > 122) {
                    unicode -= 26;
                }
                while (unicode < 97) {
                    unicode += 26;
                }
            }
            shifted += String.fromCharCode(unicode);
        }
    }
    return shifted;
}


module.exports = caesar