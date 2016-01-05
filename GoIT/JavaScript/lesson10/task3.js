function sortString(string){
    var sorted = string.split('').sort().join('');
    return sorted;
}
console.log(sortString('webmaster'));