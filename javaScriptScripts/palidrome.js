function palindrome(str) {
    // Declare Variables
    var newArray = [];
    var lower;
    var arrayToString;
    var replaceSpCh;
    var newString;
    
    
    //Lower the input string
    
    lower = str.toLowerCase();
    
    //Replace all the unecasary Characters
    
    newString = lower.replace(/[^0-9A-Z]/gi,"");
    
    //Creating a new array spliting the text
    
    newArray = lower.split("");
  
    arrayToString = newArray.reverse().join("");
  
    
    replaceSpCh  = arrayToString.replace(/[^0-9A-Z]/gi,"");

    //Check to see if the new reversed text is equal with the old unreversed text.
    
    if (replaceSpCh === newString) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");