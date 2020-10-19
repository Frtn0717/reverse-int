module.exports = function reverse (n) {

  if (n > 0) {
    let strNum = String(n);
    let result = '';

    for (let i = strNum.length; i >= 0; i-- ) {
    result = result + strNum.charAt(i);
    }
    return result;
  } else {
    n = -n;
    let strNum = String(n);
    let result = '';

    for (let i = strNum.length; i >= 0; i-- ) {
        result = result + strNum.charAt(i);
    }
    return result;
  }
}
