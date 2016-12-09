function repeatStringNumTimes(str, num) {
    var array = [];
    
    for (var i = 0; i < num; i++) {
        array.push(str);
    }
    
    return array.join("");
}

repeatStringNumTimes("abc", 3);