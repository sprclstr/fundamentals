// // Function constructors
// function Circle (radius) {
//   this.radius = radius;
// }

// Circle.prototype.getArea = 
//   function () {
//     return Math.PI * Math.pow(this.radius, 2);
//   };


// var myCircle = new Circle(10);
// console.log(myCircle.getArea());

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);
// var counter = 0;
// var myArray = [
// 	"Yaakov",
// 	2,
// 	{handle: "yaakovchaikin"}
//  ];

// for (var i = 0; i < myArray.length; i++) {
//   counter++;
// }

// console.log(counter);

 (function(window) {
 var obj = {};
 obj.dreamOn = function () {
  console.log("I want to see the global scope! Let me out!");
 };
window.doer = obj;
})(window);

doer.dreamOn();


// (function(window) {
//   var obj = {};
//   // obj.name = "Yaakov";
//   // var greeting = "Hello ";
//   obj.sayHello = function () {
//     console.log("I want to see the global scope! Let me out!");
//   }
//   window.obj = obj;

// })(window);

// obj.sayHello();
