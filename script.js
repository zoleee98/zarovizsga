function osszesOszto(num) {
    var divisors = [];
    for (var i = 1; i <= num; i++) {
        if (num % i === 0)
            divisors.push(i);
    }
    return divisors;
}
function parosDarab(array) {
    return array.filter(function (num) { return num % 2 === 0; }).length;
}
function fuggvenyhivasPalindrom(callback) {
    var str = callback();
    return str === str.split("").reverse().join("");
}
