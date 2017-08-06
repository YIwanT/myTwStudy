'use strict';

function include(collection, ch){
    for (let item of collection ){
        if (item === ch ){
            return true ;
        }
    }
    return false ;
}
module.exports = function createUpdatedCollection(collectionA, objectB) {
let result = [] ;
for (let item of collectionA){
    if (include(objectB.value, item.key)){
        item.count--;
    }
    result.push({key: item.key, count: item.count});
}
return result ;
}
