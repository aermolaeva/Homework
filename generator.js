function checkProbabilityTheory(count) {
    var result = {
        num: count,
        odd: 0,
        even: 0,
        percent: 0,
    }
    var from = 100
    var to = 1000

    for (let i = 0; i < count; i++) {
        var rnd = Math.round(Math.random() * (to - from) + from);

        if (rnd % 2 === 0) {
            result.even++
        } else {
            result.odd++;
        }
    }

    if (result.even != result.odd && result.odd != 0) {
        result.percent = Math.round(result.even / result.odd * 100);
    } else if (result.odd == 0) {
        result.percent = 100;
    }

    return result;
}
  
console.log(checkProbabilityTheory(10));