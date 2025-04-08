// JavaScrpit variables 

// console.log(x) // undefined

// var x =10;// Get hoisted at the top  

// console.log(y) // not defined error 

// let y = 10; // doest get hoisted 

// function test() {
//     var y = 20;
//     if (true) {
//       var y = 30;// function scoped and not block scoped
//       console.log(y) //30  Same variable as above - redeclared
//     }
//     console.log(y); // 30
//   }
// console.log(y)// error not defined variable
// test();

// Var when declared in Global scope creates a property on the global object(window in browsers).



// Let is block scoped , doesnt get hoisted , no redeclaration, can assign new value
// when declared in the global scpope it doesnt create a property on the global object

// let y = 10;

// function test() {
//   //let y = 20;// function scoped
//   if (true) {
//     // let y = 30; // Different variable from outer y concept of variable shadowing
//                     // The inner variable "shadows" the outer one, making it temporarily inaccessible within that block, but the outer variable continues to exist unchanged.
//     console.log(y); // 30
//   }
//   console.log(y); // 20
// }
// console.log(y)// error not defined
// test();

// Concept lexical scoping:  when you reference a variable, JavaScript first checks the immediate scope. 
// If it doesn't find the variable there, it continues looking in the outer containing scopes until it either finds the variable or reaches the global scope.


// Const: Block scoped, cannot be accessed before decaltion, cannot redeclare, cannot reassign, Mutable contents( for objects and arrays contents can still be changed), no global property

// const PI = 3.14159;
// // PI = 3.14; // TypeError: Assignment to constant variable

// // But for objects, the properties can change
// const person = { name: "John" };
// person.name = "Jane"; // Valid - mutating properties
// // person = {}; // TypeError: Assignment to constant variable

// Momory organization in JavaScript 
// The stack: Fast limited size memory for primitive values(Primitive values (number, string, boolean, null, undefined, symbol, bigint)) , with reference pointers to the heap objects. 
// The heap: Larger more flexible memory (Objects,Arrays,Functions,Other complex data structures)


// When you create a variable with a primitive value (using any declaration keyword), JavaScript:

// Allocates memory space on the stack
// Stores the actual value directly in that space
// Associates the variable name with that memory location

// let num = 42;       // number directly on stack
// let str = "hello";  // string directly on stack
// let bool = true;    // boolean directly on stack

// When you create an object (including arrays and functions):

// The object itself is allocated on the heap
// A reference (memory address pointer) to that heap location is stored on the stack
// The variable name is associated with the reference, not the object itself

// const obj = { name: "Alice" };  // obj is a reference to heap memory
// const arr = [1, 2, 3];          // arr is a reference to heap memory

// When you copy reference values, you copy the reference, not the object
// const original = { value: 10 };
// const copy = original;  // copy points to the same object

// copy.value = 20;
// console.log(original.value);  // 20 - both variables reference the same object


//Memory Management and Garbage collection 

// JavaScript uses automatic garbage collection to reclaim memory from objects that are no longer reachable 
// (i.e., have no references pointing to them).

// Mark and Sweep Algorithm:

// The garbage collector builds a list of "root" objects (global objects, currently executing functions)
// It marks all objects reachable from these roots as "in use"
// It then frees memory for all unmarked objects

// let obj = { data: "temporary" };
// obj = null;  // Original object is now unreachable and eligible for garbage collection


// Variable lifecycle: 

// console.log(y)// Undefined
// var y // gets hoisted at the top of fucntion scope which is global object here
// console.log(y)// undefined

// console.log(y)// error 
// let y // gets hoisted at the top of fucntion scope which is global object here
// console.log(y)// undefined


// Closures and Memory:
// JavaScript closures can preserve variables in memory even after their scope has ended:

// function createCounter() {
//     let count = 0;  // This variable would normally be garbage collected
    
//     return function() {
//       return ++count;  // But it's preserved in the closure
//     };
//   }
  
//   const counter = createCounter();
//   console.log(counter());  // 1
//   console.log(counter());  // 2

//   function Counter() {
//     let count = 0;  // Once the function ends it will be garbage collected
      
//       return ++count;  
   
//   }
  
  
//   console.log(Counter());  // 1
//   console.log(Counter());  // 2

// Browser Storage vs. Memory

// Variables in memory only last for the page session
// For persistence beyond refreshes, use:

// localStorage/sessionStorage
// IndexedDB
// Cookies