function add() {
    var result = 0;

    for(var i=0; i<arguments.length; i++){
        result += arguments[i] * (i+1);
    }

    return result;
}
console.log(add(1,2,3));
