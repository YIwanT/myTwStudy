'use strict';

function find (collection, ch){
    for (let item of collection){
        if (item.key === ch ){
            return item;
        }
    }
    return null ;
}

function summarize (collection){
    let result = [];
    for (let item of collection){
      let obj = find(result, item);
      if (obj){
          obj.count++;
          
      }else{
          result.push({key: item, count: 1});
      }
      
  }
  return result ;
  }

function push(array, key, count ){
    for (let i = 0 ; i < count ; i++){
        array.push(key);
    }
}

function split(item){
    let array = item.split("-");
    return {key: array[0], count: parseInt(array[1])};
}

function expand(collection){
    let array = [] ;
    for (let item of collection){
        if (item.length === 1){
            array.push(item);
        }else {
            let {key, count } = split(item);
            push(array, key, count);
        }
    }
    return array ;
}

function include(collection, ch){
    for (let item of collection ){
        if (item === ch){
            return true ;
        }
    }
    return false ;
}
function discount(collection, promotionItems){
     let result = [] ;
     for (let item of collection){
      let count = item.count ;
      if (include(promotionItems, item.key)){
          count = count - parseInt(count / 3);
      }
      result.push({key: item.key, count: count});
  }
  return result ;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
 
  let expandedArray = expand(collectionA);
  let summarizeArray = summarize(expandedArray);
  return discount(summarizeArray, objectB.value);
 
}
