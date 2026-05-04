const myString="bharat saini";
const length=myString?.length;
console.log(length,"length");
const upperCase=myString?.toUpperCase();
console.log(upperCase,"upperCase");
const lowerCase=myString?.toLowerCase();
console.log(lowerCase,"lowerCase");
const includes=myString?.includes("saini");
console.log(includes,"includes");
const indexOf=myString?.indexOf("saini");
console.log(indexOf,"indexOf");
const split=myString?.split(" ");
console.log(split,"split");
const substring=myString?.substring(0,6);
console.log(substring,"substring");
const trim=myString?.trim();
console.log(trim,"trim");
const charAt=myString?.charAt(0);
console.log(charAt,"charAt");
const startsWith=myString?.startsWith("bharat");
console.log(startsWith,"startsWith");
const endsWith=myString?.endsWith("saini");
console.log(endsWith,"endsWith");


const replaceString=myString?.replace("bharat","rahul");
console.log(replaceString,"replaceString");

const palenndromeString="madam";
const isPalenndrome=palenndromeString?.split("").reverse().join("")===palenndromeString;
console.log(isPalenndrome,"isPalenndrome");
const reverseString=myString?.split("").reverse().join("");
console.log(reverseString,"reverseString");

const myString2="naman";
const isPalDrone=myString2?.split("")?.reverse().join("")===myString2;
console.log(isPalDrone,"isPalDrone");