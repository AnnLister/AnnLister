function applyAll(func) {
    var args = [].slice.call(arguments);
    var theArgs = args.slice(1);

    return func.apply(func,theArgs);
}
console.log(applyAll(Math.max, 2, -2, 3));