function chunkArrayInGroups(arr, size) {
  
  "use strict";
  var newArray = [];
  newArray.push(arr.slice(0, size));
  for (var i = size; i < arr.length; i++) {
      if(i % size === 0) {
          newArray.push(arr.slice(i, i + size));
      }
      
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);