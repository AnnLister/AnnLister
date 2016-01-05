function count (string) {
    result = {};
    string.split('').forEach(function(item){
        if(result[item]){
            result[item] += 1;
        } else {
            result[item] = 1;
        }
    });
    return result;
}

console.log(count("abaa"));