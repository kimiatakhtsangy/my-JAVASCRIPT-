


function check_prime(n){
    let m=2;
    while (m<n){
         if (n%m === 0) {
            return false;
           
           }
           return true;
    }  
}
function find_prime(a,b){
 for (let k=a;k<b;k++){
    if (check_prime(k)) {
        return k;
        k++;
     
    }
  }
}
console.log(find_prime(4,10));
console.log(find_prime(11,20));