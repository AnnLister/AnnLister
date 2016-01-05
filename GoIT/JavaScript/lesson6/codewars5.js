function isValidWalk(walk) {
    var dy = 0;
    var dx = 0;
    var size = walk.length;
    for (i=0; i<walk.length; i++){
        switch(walk[i]){
            case 'n': dx+=1;
                break;
            case 's': dx-=1;
                break;
            case 'e': dy+=1;
                break;
            case 'w': dy-=1;
                break;
        }
    }
    return dx===0 && dy===0 & size == 10 ? true : false;
}