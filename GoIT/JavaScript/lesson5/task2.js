var image = {
    width: 100,
    height: 400,
    title: null
};

function multiplyNumeric(obj){
    for(var key in obj){
        if(!isNaN(parseFloat(obj[key]) && isFinite(obj[key]))){
            obj[key] *= 2;
        }
    }
    return obj;
}

console.log(multiplyNumeric(image));