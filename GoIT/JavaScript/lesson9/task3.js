function work(a, b) {
    console.log( a + b );
}

function makeLogging(f, log) {

    function wrapper() {
        var args = [].slice.call(arguments);
        log.push(args);
        return f.apply(this, arguments);
    }

    return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
    var args = log[i];
    console.log( 'Лог:' + args.join() );
}