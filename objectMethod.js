const commentData={
    name:"bharat",
    age:24,
    city:"delhi",
    profession:"software developer"
};

const keys=Object?.keys(commentData);
console.log(keys,"keys");

const values=Object?.values(commentData);
console.log(values,"values");

const entries=Object?.entries(commentData);
console.log(entries,"entries");

const hasName=Object?.hasOwnProperty("name");
console.log(hasName,"hasName");

let arr = [["name","Bharat"], ["age",22]];

const fromEntries=Object?.fromEntries(arr);
console.log(fromEntries,"fromEntries");

let obj1 = { a: 1 };
let obj2 = { b: 2 };

const result1=Object?.assign({},obj1,obj2);
console.log(result1,"result1");
// isme obj1 change nahi hua hai kyuki humne ek empty object ko target object banaya hai to obj1 me obj2 ke properties add nahi hue hai

const result2=Object?.assign(obj1,obj2);
console.log(result2,"result2");
// isme obje1 change hua hai kyuki humne obj1 ko target object banaya hai to obj1 me obj2 ke properties add ho gaye hai

const result3={...obj1,...obj2};
console.log(result3,"result3");
// isme bhi obj1 change nahi hua hai kyuki humne spread operator ka use kiya hai to obj1 me obj2 ke properties add nahi hue hai

let obj = { name: "Bharat" };

Object.freeze(obj);

obj.name = "Rahul"; // change nahi hoga
obj.age = 22;       // add nahi hoga

console.log(obj,"obj");


let OBJ = { name: "Bharat" };

Object.seal(OBJ);

OBJ.name = "Rahul"; // change ho sakta hai
OBJ.age = 22;       // add nahi hoga

console.log(OBJ,"OBJ");

let objNew = { name: "Bharat" };

Object.preventExtensions(objNew);

objNew.age = 22; // ❌ add nahi hoga
objNew.name = "Rahul"; // ✅ update ho sakta hai
delete objNew.name; // ✅ delete ho sakta hai

console.log(objNew,"objNew");


// Easy Difference Trick
// Method	Add	Delete	Update
// preventExtensions()	❌	✅	✅
// seal()	❌	❌	✅
// freeze()	❌	❌	❌




// 1. Optional Chaining (?.) — already use kar raha hai
// user?.name

// 👉 Safe access (React me bahut use hota hai)

// 2. Destructuring (🔥 MUST)
// const { name, age } = commentData;

// 👉 Clean code + interview favorite

// 3. Deep vs Shallow Copy (VERY IMPORTANT ⚠️)
// let obj = { user: { name: "Bharat" } };

// let copy = { ...obj };

// copy.user.name = "Rahul";

// console.log(obj.user.name); // 😱 Rahul (problem!)

// 👉 Spread = shallow copy only

// 4. Loop over object
// for (let key in commentData) {
//   console.log(key, commentData[key]);
// }

// 👉 Basic but important

// 5. Delete operator
// delete commentData.age;
// 6. Object destructuring + rest
// const { name, ...rest } = commentData;

// 👉 React props me use hota hai 🔥




// let objData = {
//   name: "Bharat",
//   address: {
//     city: "Delhi"
//   }
// };

// let copy = { ...objData }; // shallow copy

// copy.address.city = "Mumbai";

// console.log(objData.address.city); // 😱 Mumbai

// 👉 Kya hua?

// copy banaya
// par address same reference hai
// isliye original bhi change ho gaya ❌



// let objData = {
//   name: "Bharat",
//   address: {
//     city: "Delhi"
//   }
// };

// let copy = JSON.parse(JSON.stringify(objData)); // deep copy
// console.log(copy,"copy")
// copy.address.city = "Mumbai";

// console.log(objData.address.city); // ✅ Delhi

// 👉 Ab kya hua?

// pura object copy ho gaya
// original safe hai ✅

// JSON method ki limitation
// let obj = {
//   date: new Date(),
//   fn: () => {}
// };

// let copy = JSON.parse(JSON.stringify(obj));

// console.log(copy);
// ❌ date string ban jayega
// ❌ function remove ho jayega


// let objData = {
//   name: "Bharat",
//   address: { city: "Delhi" }
// };

// let copy = structuredClone(objData); // deep copy

// copy.address.city = "Mumbai";

// console.log(objData.address.city); // ✅ Delhi

// 👉 ✔ safest
// 👉 ✔ modern JS
// 👉 ✔ nested bhi safe