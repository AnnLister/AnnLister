var pow = function (num1,num2) {
    var pow1 = 1;
    for (i = 0; i< num2; i++)
    {
        pow1 = pow1 * num1;
    }
    return pow1;
};
console.log(pow(3,4));