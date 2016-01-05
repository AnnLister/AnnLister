var make_lazy = function (func) {
    var args = [].slice.apply(arguments);
    var theArgs = args.slice(1);
    return function(){
        return func.apply(func,theArgs);
    }
};