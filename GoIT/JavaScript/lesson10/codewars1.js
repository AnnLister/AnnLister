function fibonacci(n) {
    var fibo = [];

    for(var i=2; i<n; i++){
        fibo[0] = 0;
        fibo[1] = 1;
        fibo[i] = fibo[i-2] + fibo[i - 1];
    }
    if(n <= 0){
        fibo = [];
    }
    return fibo;
}
console.log(fibonacci(5))