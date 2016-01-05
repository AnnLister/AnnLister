(function printNumbersInterval(){
    var counter = 1;
    var timerID = setInterval(function(){
        console.log(counter);
        if (counter == 20) clearInterval(timerID);
        counter++;
    }, 100);
})();