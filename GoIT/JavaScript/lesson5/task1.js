var tasksCompleted = {
    'Anna': 25,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

function getWorkaholic(obj){
    var max = 0;
    var workaholic = '';
    for(var name in obj){
        if(max < obj[name]){
            max = obj[name];
            workaholic = name;
        }
    }
    console.log(workaholic);
}

getWorkaholic(tasksCompleted);