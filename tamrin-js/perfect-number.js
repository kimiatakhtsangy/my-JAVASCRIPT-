
let  anw=0;
function kamel(num) {
    for (var m=1;m<num;m++) {
        if (num%m === 0) {
            anw += m;
        }
        
    }
    if (anw === num) {
        return 'Yes';
    }
    else 
    return 'NO';
    
}
console.log(kamel(6));
console.log(kamel(27));