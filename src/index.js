module.exports = function reverse (n) {

    let str = n;

    if (n > 0) {
        str = n + '';
        return +str.split('').reverse().join('');
    } else {
        str = -n + '';
        return +str.split('').reverse().join('');
    };
};
