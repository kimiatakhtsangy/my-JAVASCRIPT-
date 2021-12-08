var num =20;

function contain(object,num) {
 for (var i in object)
     if(object[i]=== num) {
         return true;
        
     }
// if (object.has(num)) {
//     return true;
    
// }
     else if(typeof(i)=='object') {
         contain();
        
     }

     else {
        return false;
         }
    
}


const object={
    d:{
        c:{
            b:{
                a:{
                    number:20,str:'hi'
                }
            }
        }
    }
}
console.log(contain(object));  



