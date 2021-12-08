let text;
function type(text) {
    if (typeof (text)=== 'string') {
        return true;
    } 
    else 
    return false;
    
}
console.log(type(123));
console.log(type("kimia"));
console.log(type('javascript'));