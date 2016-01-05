var Calculator = {
    average: function() {
        if(arguments.length === 0){return 0;}
        else{
            var sum = 0;
            for (var i = 0; i < arguments.length; i++){
                sum += arguments[i];
            }
            return sum / arguments.length;
        }
    }
};

console.log(Calculator.average(3,4,6,7,3));