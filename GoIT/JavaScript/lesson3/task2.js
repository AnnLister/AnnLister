var number1 = 2, number2 = 10;

for(var i = number1; i <=number2; i++){
    for(var k = 2; k < i; k++) {
        if (i % k === 0) break;
    }
    if(k==i){
        console.log(i);
    }
}