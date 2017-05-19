function isNumberValid(number) {

    if(typeof number !== 'number')
        throw new Error('You should pass a number');
    
    const sum = doubleOddDigitFromArray(
        getNumberAsArray(number).reverse()
    )
    .reduce(sumValues, 0);

    return sum % 10 === 0;
}

function getNumberAsArray(value) {

    return value
        .toString()
        .split('')
        .map(digit => Number(digit));
}

function doubleOddDigitFromArray(array) {

    return array.map(
        (digit, index) => index % 2 === 0 
            ? digit
            : digit * 2
    );
}

function sumValues(accumulator, value) {
    
    return accumulator + (
        value <= 9
            ? value
            : value - 9 //an alternative to avoid digits sum from numbers greater than 9. See: https://en.wikipedia.org/wiki/Luhn_algorithm
    )
}

module.exports = {
    isNumberValid
}