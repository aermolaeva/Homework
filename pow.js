function pow(number, degree) {
    let result = 1;
    for (let i = 1; i <= degree; i++) {
        result = result * number;
    }
    return result
}
console.log(pow(2, 3));