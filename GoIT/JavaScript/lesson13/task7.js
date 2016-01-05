function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

function Fridge(power){
    Machine.apply(this, arguments);
    var food = [];
    this.addFood = function(){
        if(this._enabled === false){
            throw new Error("Холодильник выключен");
        }
        if(food.lenght + arguments.length >= this.power / 100){
            throw new Error("Cлишком много еды");
        } else {
            for(var i = 0; i < arguments.length; i++){
                food.push(arguments[i]);
            }
        }
    };

    this.getFood = function(){
        return food.slice();
    };

}
// создать холодильник мощностью 500 (не более 5 еды)
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "зелень");
fridge.addFood("варенье", "пирог", "торт");