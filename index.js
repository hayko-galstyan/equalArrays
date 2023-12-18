// ՀԱՎԱՍԱՐԱՄԵԾ ԶԱՆԳՎԱԾԻ ՍՏՈՒԳՈՒՄ

function solution(A,B) {
   if(A.length != B.length)
       return false;
   let itemA = []
   let itemB = []
     for(let i=0;i<A.length;i++){
         if(A[i] != B[i]) {
             itemA.push(A[i])
             itemB.push(B[i])
         }
    }
    if(itemA.length > 2)
         return false;
     for(let i=0;i<itemA.length;i++){
         if(!itemB.includes(itemA[i])){
            return false
         }
     }
     return true
 }
