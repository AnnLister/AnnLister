var arr = [];
var i = 0;
var sum = 0;

do{
    var num = prompt('Введіть число');
    if(isNaN(parseFloat(num) && isFinite(num))){
        break;
    }
    arr[i] = num;
    i++;
}while(num != null);

for(i = 0; i < arr.length; i++){
    sum += +arr[i];
}

alert(sum);