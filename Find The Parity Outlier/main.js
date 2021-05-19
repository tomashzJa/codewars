function findOutlier(integers){
   
    Array.prototype.isOdd=function(){
       return integers.slice(0,3).reduce((val,cur)=>{val+=(Math.abs(cur)%2==1)?1:-1;return val;},0);
    }
   
    return integers.isOdd()>0?integers[integers.findIndex((val)=>{return Math.abs(val)%2==0;})]:integers[integers.findIndex((val)=>{return Math.abs(val)%2==1;})];
  }