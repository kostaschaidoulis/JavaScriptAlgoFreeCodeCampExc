function confirmEnding(str, target) {
 //Variable initialization
    var lastLetter;
    var lastLetters;
    var lastWord;
    var array = [];
    
    //Catch last letter of the word
    lastLetter = str.substr(str.length - 1);
    lastLetters = str.substring(7,str.length);
    
    //Split string to array to catch the last word in string 
    
    array = str.split(" ");
    
    
    for (var i = 0; i < array.length; i++ ) {
        lastWord = array[array.length - 1];
    }
    
    if (lastLetter === target || 
        lastLetters === target ||
        lastWord === target) {
        return true;
    } else {
        return false;
    }
}

confirmEnding("Bastian", "n");

