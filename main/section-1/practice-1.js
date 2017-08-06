'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
let result = [] ;
function include (collection, ch){
    for (let item of collection){
        if (ch === item){
            return true ;
        }
    
    }
    return false;
}
for (let item of collectionA){
    if (include(collectionB, item)){
        result.push(item);
    }        
} 
return result ;
 
}
