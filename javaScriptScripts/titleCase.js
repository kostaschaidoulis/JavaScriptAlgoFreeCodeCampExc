function titleCase(str) {
  
  var newArray = [];
    
  newArray = str.toLocaleLowerCase().split(" ");
    
  for(var i = 0; i < newArray.length; i++) {
    newArray[i] = newArray[i].charAt(0).toLocaleUpperCase() + newArray[i].substr(1);
  }
  
    return newArray.join(" ");
}

titleCase("I'm a little tea pot");