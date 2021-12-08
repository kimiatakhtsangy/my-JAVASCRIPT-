//question 14:
//https://quera.ir/problemset/28947
//let m=window.prompt("chand ta sin yadet rafte??");
//********************************************************8 */


 function sin7(m) {
  const sin = ["sib","senjed","samanoo","sir","somagh","serke","sekke","sabze"];
   if (m<1 || m>7) {
         return "adad vared shode sahih nist!!"
        }
        else{
            let output = sin.slice(0,m);
             return output;
            // for(var i=0;i<m;i++){
            //     console.log(sin[i]); 
            //  }
        }
 }
console.log(sin7(5));