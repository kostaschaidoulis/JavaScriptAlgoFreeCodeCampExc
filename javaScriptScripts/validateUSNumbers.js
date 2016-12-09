//The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):



function telephoneCheck(str) {
  var regExp = [
        /^\u0028\d{3}\u0029\d{3}\W\d{4}/g,                
        /^\u0031\u0028\d{3}\u0029\d{3}\W\d{4}/g, 
        /^\u0031\s\d{3}\s\d{3}\s\d{4}/g, 
        /^\d{3}\s\d{3}\s\d{4}/g,
        /^\d{3}\-\d{3}\-\d{4}/g,
        /^\u0028\d{3}\u0029\s\d{3}\W\d{4}/g,
        /^\u0035\d{9}/g,
        /^\u0031\s\d{3}\u002D\d{3}\u002D\d{4}/g,
        /^\u0031\s\u0028\d{3}\u0029\s\d{3}\u002D\d{4}/g
       ];
    for (var i = 0; i < regExp.length; i++) {
        if(regExp[i].exec(str)) {
            console.log(i);
            return true;
        } 
    }
    return console.log(false);
}
telephoneCheck("27576227382");