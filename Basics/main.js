console.log("Hi");
let text = "Hello";
text = 20;
text = true;
let number = 10;
console.log(typeof text);

if (2 === 2) {
  console.log("yes");
}

if (false) {
  console.log("true");
} else if (false) {
  console.log("else");
} else if (true) {
  console.log("true");
} else {
  console.log("false");
}

let num = 10;
let result = num % 2 === 0 ? "yes" : "no";

console.log(result);

console.clear();

let userType = null;

let subscription = userType ?? "Guest";

console.log(subscription);

function fun() {
  let sample = 10;
  if (true) {
    let sample = 30;
  }
  console.log("i am function", sample);
  return 10;
}

let r = fun();
console.log(r);

let a;
console.log(typeof a);

let b = 10;

if (true) {
  let b = 20;
}

console.log(b);

// global
// function
// block

console.clear();
// Closures In Javascript

function fun() {
  let count = 0;
  function innerFun() {
    count++; // lexical scope variable
    console.log(count);
  } // Closures
  return innerFun;
}

let i = fun();
// console.log(i);

i();
i();
i();
i();
i = fun();
i();
i();
i();

// array
let array = [10, 20, 30, "s", true, 3.3];
console.log(array);

let product = {
  name: "MAC AIR M1",
  brand: "Apple",
  price: "Rs. 65k",
  0: "hello",
};

// JSON =>
console.log(product);

const text1 = "Hello";
// text1 = "Edureka";

const array3 = [1, 2, 3, 4.5];
const array4 = [...array3]; // deep
array3[0] = 30;

let newArray = array3;
console.log(array3);
console.log(array4);

// ES6
function funOne() {}

let funTwo = function () {
  return 10;
}; // there own context

let funThree = () => {
  return 10;
}; // don't have there own context

funOne();
funTwo();
funThree();

console.clear();
function fun1(a = 0, b = 0) {
  console.log(a + b); // Not A Number => NaN
}
isNaN(2); // false
fun1();

// rest para
function fun2(...list) {
  console.log(list);
}

fun2(1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9);

// destructuring
let array5 = [10, 20, 30, 40];

// let n1 = array5[0];
// let n2 = array5[1];
// let nArray = array5.slice(2);

let [n1, n2, ...nArray] = array5;

console.log(n1, n2, nArray);
