// A capitalize function that takes a string and returns it with the first character capitalized.

// A reverseString function that takes a string and returns it reversed.

// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

const capitalize = function(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

const reverseString = function(string) {
    return string.split("").reverse().join("")
}

const calculate = {
    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2
    }
}

export {capitalize, reverseString, calculate}