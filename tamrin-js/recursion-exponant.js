var x = window. prompt("adad ra vared konid:");
var y = window. prompt("tavaan ra vared konid:");

//x^y
function power(x,y) {
    if (y===0) {
        return 1;
        
    }
    else {
        let output=x * power(x,y-1);
        return output;
    }
    
}
console.log(power(x,y));
