function fizzbuzz(num) {
   if (num%15 == 0) {
        return 'fizzbuzz'; 
    }
    else if (num%3 == 0) {
        return 'fizz'; 
    }
    else if (num%5 == 0) {
        return 'buzz';  
    }
}
console.log(fizzbuzz(45));
console.log(fizzbuzz(99));
console.log(fizzbuzz(25));
console.log(fizzbuzz(90));