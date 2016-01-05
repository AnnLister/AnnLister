function removeClass(obj, cls){
    var classes = obj.className.split(' ');
    if(classes.indexOf(cls) == -1){
        obj.className = classes.join(' ');
    }
    else {
        classes.splice(classes.indexOf(cls), 1);
        obj.className = classes.join(' ');
        removeClass(obj, cls);
    }
}

var obj = {
    className: 'open menu menu my'
};
removeClass(obj, 'menu');

console.log( "'" + obj.className + "'" );