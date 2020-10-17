export const getGuessValue = (step, tip, start) => {
    switch (step) {
        case 1:
            return getNumberBySum(tip, start)

        case 2:
            return getNumberByMod(tip, start);

        case 3:
            return getNumberByProduct(tip, start);

        default:
            return 0;
    }
};

const getNumberBySum = (sum, start) => {
    let primeNumber = start;

    while (getSumByDigits(primeNumber) !== parseInt(sum)) primeNumber = nextPrime(primeNumber);

    return primeNumber;
};

const getNumberByMod = (mod, start) => {
    let primeNumber = start;

    while (primeNumber % 7 !== parseInt(mod)) primeNumber = nextPrime(primeNumber);

    return primeNumber;
};

const getNumberByProduct = (product, start) => {
    let primeNumber = start;

    while (getProductByDigits(primeNumber) !== parseInt(product)) primeNumber = nextPrime(primeNumber);

    return primeNumber;
}

const getSumByDigits = number => {
    const textNumber = number.toString();
    let sum = 0;

    for (const digit of textNumber) {
        sum += parseInt(digit);
    }

    return sum;
};

const getProductByDigits = number => {
    const textNumber = number.toString();
    let product = 1;

    for (const digit of textNumber) {
        if(parseInt(digit) !== 0) product *= parseInt(digit);
    }

    return product;
};

export const getIntervalSearch = (start, end, guess, highOrLow) => {
    switch (highOrLow) {
        case 'low':
            return {
                start,
                end: guess + 1,
                guess: nextPrime(Math.floor((start + guess) / 2))
            }

        case 'high':
            return {
                start: guess - 1,
                end,
                guess: nextPrime(Math.floor(((guess + end)) / 2))
            }

        default:
            return {
                start,
                end,
                guess
            }
    }
};

const isPrime = number => {
    let start = 2;
    const limit = Math.sqrt(number);

    while (start <= limit) {
        if (number % start++ < 1) return false;
    }

    return number > 1;
};

const nextPrime = number => {
    if (number <= 1) {
        return 2
    }

    let prime = number;
    let found = false;

    while (!found) {
        prime = prime + 1;

        if (isPrime(prime) == true) found = true
    }

    return prime
};