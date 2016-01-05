function convertString(string){
    return (string.split(' ').map(function(word){
        return word[0].toUpperCase() + word.slice(1);
    })).join(' ');
}
console.log(convertString('the quick brown fox'));