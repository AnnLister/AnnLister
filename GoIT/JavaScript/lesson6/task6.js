function unique(arr){
    var obj = {};

    var newArr = [];

    for(i=0; i<arr.length; i++){
        var prop = arr[i].toLowerCase().split('').sort().join('');
        obj[prop] = arr[i];
    }

    for(var key in obj){
        newArr.push(obj[key]);
    }
    return newArr;
}
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

console.log( unique(strings) );