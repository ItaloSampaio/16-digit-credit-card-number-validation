function isValidNumber(number) {

    if(typeof number !== 'number')
        throw new Error('You should pass a number');

    if(number.toString().length !== 16)
        return false;
    
    const sum = getNumberAsArray(number)
        .reverse()
        .map(doubleOddDigit)    
        .reduce(sumValues, 0);

    return sum % 10 === 0;
}

function getNumberAsArray(value) {

    return value
        .toString()
        .split('')
        .map(digit => Number(digit));
}

function doubleOddDigit(digit, index) {
    
    return index % 2 === 0
        ? digit
        : digit * 2
}

function sumValues(accumulator, value) {

    return accumulator + (
        value <= 9
            ? value
            : value - 9 //an alternative to avoid digits sum from numbers greater than 9. See: https://en.wikipedia.org/wiki/Luhn_algorithm
    )
}

module.exports = {
    isValidNumber
}