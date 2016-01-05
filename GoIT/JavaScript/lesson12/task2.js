function printNumbersTimeout(){
    var i = 1;
    var timer = setTimeout(function time(){
        i++;
        if(i<20){
            setTimeout(time,100);
        };

        console.log(i);

    },100);
}
printNumbersTimeout();