const fibonacci = function(fib) {
    if (+fib < 1) {
        return 'OOPS'
    } else if (+fib == 1) {
        return 1
    } else {
        var a = 1
        var b = 1;
        let temp = 0;
        for (let i = 1; i < +fib; i++) {
            temp = a;
            a = b;
            b = temp + b;
        }
    }
    return a
}

module.exports = fibonacci