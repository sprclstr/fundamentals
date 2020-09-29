// // Copy by Reference vs by Value
// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);

// // var a = b;
// // console.log("a: " + a);
// // console.log("b: " + b);



// var a = { x: 7 };
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x update:");
// console.log(a);
// console.log(b);



// Pass by reference vs by value
// function changePrimitive(febe) {
//   console.log("in changePrimitive...");
//   console.log("before:");
//   console.log(febe);
  
//   febe = 5;
//   console.log("after:");
//   console.log(febe);
// }

// var core = 7;
// changePrimitive(core); // primValue = value
// console.log("after changePrimitive, orig value:");
// console.log(core);



function changeObject(objValue) {
  console.log("in changeObject...");
  console.log("before:");
  console.log(objValue);
  
  objValue.x = 5;
  console.log("after:");
  console.log(objValue);
}

value = { x: 7 };
changeObject(value); // objValue = value
console.log("after changeObject, orig value:");
console.log(value);





