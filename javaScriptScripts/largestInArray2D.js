function largestOfFour(arr) {

    var arrayMax = [];
    var max;
    
    for(var i = 0; i < arr.length; i++){
        max = Math.max.apply(null,arr[i]);
        console.log(max);
        arrayMax[i] = max;
    }
    
    return arrayMax;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);