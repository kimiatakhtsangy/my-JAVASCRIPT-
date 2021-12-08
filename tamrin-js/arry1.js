let x =[5,7,9,16,23,1,-2];
function findarry(x) {
    let min={};
    let max={};
    for(var i=0;i=x.length;i++)
     if (x[i] < x[i+1]) {
         min=x[i];
         return min;
         
     }
     if (x[i] > x[i-1]) {
         max=x[i];
         return max;
     }
}