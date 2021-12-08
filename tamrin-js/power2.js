function tavando(n) {
      let i= 0 ;
      while (n>2**i) {
          i++;
          if (2**i >= n) {
            return 2**i;
            break;  
          }
          
          
      }
        
    }
    
console.log(tavando(95));
console.log(tavando(1010));