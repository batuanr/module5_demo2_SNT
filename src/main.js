// let sum: number = 0;
// let count: number = 0;
function checkPrime(n) {
    if (n < 2) {
        return false;
    }
    else {
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}
function getSum(n) {
    var sum = 0;
    var count = 0;
    for (var i = 2; count < n; i++) {
        if (checkPrime(i)) {
            sum += i;
            count++;
        }
    }
    return sum;
}
console.log(getSum(30));
