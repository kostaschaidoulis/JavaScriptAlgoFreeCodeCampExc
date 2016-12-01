function findLongestWord(str) {
    var newArray =  [];
    var bigger = 0;
    var lower;
    
    
    lower = str.toLocaleLowerCase();
    
    //Spliting the sentence in words and put
    //them in an array.
    
    newArray = lower.split(" ");
   
    
    // For. To iterate through the array.
    
    for(var i = 0; i < newArray.length; i++) {
        if (bigger < newArray[i].length) {
            bigger = newArray[i].length;
        }
    }
    
    return console.log(bigger);
}

findLongestWord("The quick brown fox jumped over the lazy dog");