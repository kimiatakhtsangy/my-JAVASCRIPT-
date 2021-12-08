var list1 = window. prompt("list too dar too: ")
var sum=0
function findINT(list1) { 
    for(var arr in list1){
        for(var n in list1){
        if (Number.isInteger(n)) {
            sum=sum+1;}
        else if (typeof (n) ='object'){
        findINT()}
        }
    } 
       
    return sum;        
}
    
    
//let list1 = [[[5],3],2,0,['foo'],[],[4,[5.1,6]]];
console.log(findINT(list1));