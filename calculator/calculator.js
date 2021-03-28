function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function sum(array) {
    return array.reduce((a, b) => a + b, 0)


}

function multiply(array) {
    return array.reduce((a, b) => a * b)
}

function power(a, b) {
    return a ** b
}

function factorial(a) {
    if (a == 0) {
        return 1
    } else {
        let fact = 1;
        for (let i = a; i > 0; i--) {
            fact *= i;
        }
        return fact
    }
}

module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
}