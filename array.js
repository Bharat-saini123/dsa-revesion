const Array=[1,2,3,4,101,12,5,6,7,8,9,10,11,12,12,6,5];

// 1) Find max Element in Array
const maxArray=Math.max(...Array);
console.log(maxArray,"maxArray");

// 2) Find minimum element in an array
const minArray=Math.min(...Array);
console.log(minArray,"minArray");


// 3) Sum of all elements in an array
// array.reduce((accumulator, currentValue, currentIndex, array) => {
//  return updated accumulator
// }, initialValue);
const sumArray=Array.reduce((a,b)=>a+b,0);
console.log(sumArray,"sumArray");

// 4) Reverse of Array

const reverseArray=Array?.reverse();
console.log(reverseArray,"rev");

// 5) Find first largest Element

const firstLargestElement=Array.sort((a,b)=>b-a);
const firstLarEle=firstLargestElement?.length>0&&firstLargestElement[0];
console.log(firstLarEle,"firstLEle");


// 6) Remove duplicates from array

const removeDuplicateArray=[...new Set(Array)]?.sort((a,b)=>a-b);
console.log(removeDuplicateArray,"removeDuplicateArray");

// 7) Check if array contains a value

const  checkValue=[...Array]?.includes(100);
console.log(checkValue,"checkValue")

// 8) merged two array

const array1=[1,2,3,4];
const array2=[5,6,7,8];
const merged1=[...array1,...array2];
const merged2=[...array1]?.concat(array2);
console.log(merged1,"merged1");
console.log(merged2,"merged2");


// 9) Find index of an Element

const findIndexElement=[1,2,5,7,8,9];

const checkIndex=[...findIndexElement]?.indexOf(7);
console.log(checkIndex,"checkIndex");

//  10) Rotate array by k positions
  
const rotateArray=[1,2,3,4,5,6,7,8,9];
const k=5;
const newArray=[...rotateArray]?.slice(k).concat([...rotateArray]?.slice(0,k));
console.log(newArray,"newArray");

// 11) check if array sorted or not
const sortedArray=[1,2,3,4,5,6,7,10];
const checkSortedOrNot=[...sortedArray]?.every((v,i,a)=>i===0||a[i]===0||a[i]>=a[i-1]);
console.log(checkSortedOrNot,"checkSortedOrNot")


// 12) Count occurrences of an element
const currentOccurrencesArray=[1,2,3,4,10,3,4,3,3];
const countElement=[...currentOccurrencesArray]?.filter((Ele)=>Ele===3)?.length;
console.log(countElement,"countElement");

// 13) Find sum of even number

const letArray=[1,2,3,4,5,6,7,8,9,10];

const getEvenNumber=[...letArray]?.filter((Ele)=>Ele%2===0);
const getSumNumber=[...getEvenNumber]?.reduce((a,b)=>a+b,0);
console.log(getSumNumber,"getSumNumber")

// 14) sum of odd number

const getSumOddNumber=[...letArray]?.filter((Ele)=>Ele%2!==0)?.reduce((a,b)=>a+b,0);
console.log(getSumOddNumber,"getSumOddNumber")

// 15) Find average of array elements
const getAverageElement=[...letArray]?.reduce((a,b)=>a+b,0)/[...letArray]?.length;
console.log(getAverageElement,"getAverageElement");

// 16) check array contains only number or not

const checkNumber=[...letArray]?.every((v,i,a)=>typeof v==="number");
console.log(checkNumber,"checkNumber")

// 17) find first repeating Element

const firstRepeatingElementArray=[1,2,3,4,5,6,7,2,1,5];
const firstRepeatingElement=firstRepeatingElementArray?.find((x,i,a)=> a.indexOf(x)!==i);
console.log(firstRepeatingElement,"firstRepeatingElement");

// 18) Find first non-repeating element

const firstNonRepeatingElementArray=[2,24,3,4,5,6,7,8,92,3,2,24,5,4];
const firstNonRepeatingElement=firstNonRepeatingElementArray?.find(x=> firstNonRepeatingElementArray.indexOf(x)===firstNonRepeatingElementArray.lastIndexOf(x));
console.log(firstNonRepeatingElement,"firstNonRepeatingElement");

// 19) Move zeros to end

const movesZerosToEndArray=[1,4,0,3,0,3,0,7,89,9];
const movesZerosToEnd=movesZerosToEndArray?.filter(x=>x!==0).concat(movesZerosToEndArray?.filter(x=>x===0));
console.log(movesZerosToEnd,"movesZerosToEnd");


// 20) Find pairs with sum = k
const myArray=[1,5,3,4,2,3,8];
const kSum = 5;
const pairs = [];
for(let i=0;i<myArray.length;i++){
  for(let j=i+1;j<myArray.length;j++){
    if(myArray[i]+myArray[j]===kSum) pairs.push([myArray[i],myArray[j]]);
  }
}
console.log(pairs,"pairs");


