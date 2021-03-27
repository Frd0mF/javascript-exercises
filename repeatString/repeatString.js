const repeatString = function(string, num) {
    let repeat = '';
    if (num == 0) {
        repeat = '';
    } else if (num < 0) {
        repeat = 'ERROR';
    } else {
        for (let i = 0; i < num; i++) {
            repeat += string;
        }
    }
    return repeat;
}

module.exports = repeatString