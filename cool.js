/**
 * Usage :
 * var r = window.location.toString().getParams('param1','param2')
 * r.param1;
 * r.param2; 
 * 
 * @param [*] args 
 */
String.prototype.getParams = function (...args) {
    var url_string = this;
    var url = new URL(url_string);
    
    var result = {}; 
    for(var i = 0; i < args.length; i++){
        result[args[i]] = url.searchParams.get(args[i]);
    }
    return result;
}
