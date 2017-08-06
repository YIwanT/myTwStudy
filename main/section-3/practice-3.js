'use strict';

function match(collection, ch){
    for (let item of collection){
        if (item === ch ){
            return true ;
        }
    }
    return false ;
}
function find(collection, ch){
    for (let item of collection){
        if (item.key === ch){
            return item ;
        }
    }
    return null ;
}
module.exports = function createUpdatedCollection(collectionA, objectB) {
  let result = [] ;
  let summary = [];
  for (let item of collectionA){
      let obj = find(summary, item)
      if (obj){
          obj.count++;
      }else {
          summary.push({key: item, count: 1});
      }
  }
   
  for (let item of summary){
      let count = item.count ;
      if (match(objectB.value, item.key)){
          count = count - parseInt(count / 3) ;
      }
      result.push({key: item.key, count: count});
  }
  return result ;
}
