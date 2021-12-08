var n = window. prompt("number??:");
var base = window. prompt("base??:");


function Log(n,base) {
    if (base<0 || base==1) {
        return "base is not valid !"
        
    }
   
        let output=  Math.log(n)/Math.log(base);
        return output;
    
    
}
console.log(Log(n,base));