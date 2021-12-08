
function evennum(arry){
    for (let i=0;i<=arry.length; i++) {
        if (arry[i]%2 == 0) {
            arry[i+1]='-';
            
       }
    }
    return arry;
}
console.log(evennum([1264]));