function theLongest(string){
    var array = string.split(' ');
    var newArray = [];
    for(i=0;i<array.length;i++){
        newArray.push(array[i].split(''));
    }
    newArray.sort(function(a, b){
        return b.length - a.length;
    });
    return newArray[0].join('');
}
console.log(theLongest('Web Development Tutorial'));