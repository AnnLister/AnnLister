function createFunctions(n) {
    var callbacks = [];
    function toPush(x){
        return function(){
            return x;
        }
    }
    for (var i=0; i<n; i++) {
        callbacks.push(toPush(i));
    }

    return callbacks;
}