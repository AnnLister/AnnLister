function suffle(arr){
    arr.sort(function(){
        return 0.5 - Math.random();
    });
    return arr;
}

console.log(suffle([1, 2, 8]));