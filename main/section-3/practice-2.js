'use strict';

function includes(collection, ch ){
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
        let count = item.count
        if (includes(objectB.value, item.key)){
            count = count - parseInt(count / 3) ;
        }
        result.push({key: item.key , count: count});
    }
    return result ;
}
