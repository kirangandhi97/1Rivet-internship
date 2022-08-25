function multiP(x,y){
 return x*y;
}
console.log(multiP(5,6));
// console.log(x);

let mul = (x,y) => x*y;
console.log(mul(1,10));

// for of loop 
let data = ["abc", "kiran", "hiral"]
let text ="";
for(let x of data){
text += x + "<br>";
}
document.write(text);
console.log(text);

// looping through string using for in
let words = "kiran Gandhi";
let text1 = "";

let start = window.performance.now();
for(let x in words){
    text1+= x+"<br>";
}
let end = window.performance.now();

console.log(end-start);
document.write(text1);

// looping through string using for of
let words2 = "kiran Gandhi";
let text2 = "";
for(let x of words2){
    text2+= x+"<br>";
}
document.write(text2);

// let arr1 = ["kiran", true, 2,3];
// arr1.forEach(function(item){
//     console.log(item);
// });


let arr1 = ["kiran", true, 2,3];
let start1 = window.performance.now();
arr1.forEach((item)=>{
    console.log(item);
});
let end1 = window.performance.now();

console.log(end1-start1);

let s = window.performance.now();

for(let i =0;i<arr1.length;i++){
    console.log(arr1[i]);
}
let e = window.performance.now();

console.log(e-s);


// map 
// 1) create objects
const apples = {name: 'apples'}
const bananas = {name: 'bananas'}
const oranges = {name: 'oranges'}

// create a new map 
const fruits =new Map();

fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 100);

console.log(fruits);





