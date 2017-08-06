
'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result = [];
  function include(collection, ch){
      for (let item of collection){
          if (item === ch ){
              return true;
          }
      }
      return false ;
  }
  for (let item of collectionA){
      if (include(collectionB[0], item)){
          result.push(item);
      }
  }
  
  return result ;
  
}
