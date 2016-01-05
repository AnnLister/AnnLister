function isPal(string){
    string = string.toLowerCase();
    var arr = string.split(' ').join('').split('');
    var arrReverse = arr.slice().reverse();
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == arrReverse[i]){
            return true;
        } else {
            return false;
        }
    }
}

console.log(isPal('Anna'));
console.log(isPal('А роза упала на лапу Азора'));
console.log(isPal('Вася'));
console.log(isPal('12321'));
console.log(isPal('123212'));