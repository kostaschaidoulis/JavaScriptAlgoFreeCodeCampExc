function divisors(integer) {
    var number = [];
    for (var i = 0; i <= integer; i++) {
        if(integer % i === 0) {
            number.push(i);
        }
    }
    number.pop();
    number.shift();
    if(number.length === 0) {
        number = integer + " is prime"
    }
    
    return console.log(number);
}

divisors(25);