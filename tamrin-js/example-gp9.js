function evennum(arry){
    output=arry.constructor === Array;
    //output=Array.isArray(arry);
    return output
}
console.log(evennum([1]));
console.log(evennum(1));
console.log(evennum("1"));

