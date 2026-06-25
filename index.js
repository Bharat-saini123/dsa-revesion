const myFunction=(array)=>{
if(array.length<=1) return true
let isIncr=true;
let iSDecr=true;
for(let i=1; i<array.length;i++){
  if(array[i]>array[i-1]){
    iSDecr=false;
  }
  if(array[i]<array[i-1]){
    isIncr=false;
  }
}
return isIncr||iSDecr
}

const newArry=[12,16,18];
console.log(myFunction(newArry),"newArry");
const newArray2=[40,20,10];
console.log(myFunction(newArray2),"newArray2");
const newArray3=[3];
const newArray4=[];
const newArray5=[12,50,14];
console.log(myFunction(newArray3),"newArray3");
console.log(myFunction(newArray4),"newArray4");
console.log(myFunction(newArray5),"newArray5");

