question 20
function mosalas(a,b,c) {
    if (a===b && b===c && c===a) {
        return"mosalas motesavi ol azla";
    }
    if (a===b || b===c) {
        return"mosalas motesavi ol saghein";
    }
    if (a!==b && b!==c && c!==a) {
       return"mosalas mokhtalef ol azla"; 
    }
}
console.log(mosalas(4,5,6));
console.log(mosalas(4,4,6));
console.log(mosalas(5,5,5));