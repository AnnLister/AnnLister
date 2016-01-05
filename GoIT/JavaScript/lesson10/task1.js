var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov',

    extractNumber: function(){
        var ages = [];
        for (var props in obj){
            if(typeof obj[props] == 'number'){
                ages.push(obj[props]);
            }
        }
        return ages.sort();
    },

    extractString: function extractString(){
        var names = [];
        for(var props in obj){
            if(typeof obj[props] == 'string'){
                names.push(obj[props]);
            }
        }
        return names.sort();
    }

};

console.log(obj.extractNumber());
console.log(obj.extractString());