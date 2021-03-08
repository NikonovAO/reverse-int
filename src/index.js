module.exports = function reverse (n) {
    if (n < 0)
    {
        n=n*(-1);
    }
    let n_to_String =  n.toString();
    let array_to_num = n_to_String.split("");
    let n_reverse = array_to_num.reverse("");
    return n_reverse.join('');
}
