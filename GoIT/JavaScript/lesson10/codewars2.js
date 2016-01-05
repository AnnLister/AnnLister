function isPangram(string){
    var letters = 'qwertyuiopasdfghjklzxcvbnm'.split('');
    var stringLetters = string.toLowerCase().split('');
    for(var i = 0; i < letters.length; i++){
        if(stringLetters.indexOf(letters[i]) < 0){
            return false;
        }
    }
    return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram('This is not a pangram.'));