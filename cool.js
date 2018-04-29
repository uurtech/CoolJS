String.prototype.getParams = function(...args){
    
    let newUrl = new URL(this);
    var result = {};
    for(var i = 0; i < args.length; i++){
        let searchparams = new URLSearchParams(this.search);
        result[args[i]] = searchparams.get(args[i]);
    }

    return result;
}

