function Calculator(){
    var methods = {
        '+': function(a, b) {
            return a + b;
        },
        '-': function(a, b){
            return a - b;
        }
    };

    this.calculate = function(str){
        var a = +str.split(' ')[0];
        var b = +str.split(' ')[2];
        var operator = str.split(' ')[1];
        return methods[operator](a, b);
    }

    this.addMethod = function(name, func){
        return methods[name] = func;
    }
}

var calc = new Calculator();

console.log( calc.calculate('3 + 7') );

var powerCalc = new Calculator;
powerCalc.addMethod('*', function(a, b) {
    return a * b;
});
powerCalc.addMethod('/', function(a, b) {
    return a / b;
});
powerCalc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
console.log( result );