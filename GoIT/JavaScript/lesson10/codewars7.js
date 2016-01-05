function reverseIt(data) {
    if (typeof data == 'number') {
        return +data.toString().split('').reverse().join('');
    } else if (typeof data == 'string') {
        return data.split('').reverse().join('');
    }
    return data;
}

console.log(reverseIt("Hello"));