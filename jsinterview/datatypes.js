//Primitive Data Types 

//Number, Sting ,Boolean, Undefined ,Null ,SYmbol, Bigint

// const uniqueKey = Symbol('description');
// const obj = {
//   [uniqueKey]: 'This property is identified by a symbol'
// };
// console.log(typeof(uniqueKey))// will give symbol

// const sym1 = Symbol();
// const sym2 = Symbol();
// console.log(sym1 === sym2); // false - always unique!

// const sym3 = Symbol('description');
// const sym4 = Symbol('description');
// console.log(sym3 === sym4); // false - still unique despite same description

// const _privateField = Symbol('privateField');

// class User {
//   constructor(name) {
//     this.name = name;  // Regular public property
//     this[_privateField] = { sensitiveData: 'personal info' }; // Symbol-keyed property
//   }
  
//   getPrivateData() {
//     return this[_privateField];
//   }
// }

// const user = new User('Alice');
// console.log(user.name); // "Alice"
// console.log(user[_privateField]); // Inaccessible unless you have the Symbol
// console.log(Object.keys(user)); // ["name"] - Symbol not listed!




// "5" + 2;      // "52" (string concatenation)
// "5" - 2;      // 3 (numeric subtraction)
// "5" * "2";    // 10 (numeric multiplication)
// 10 + true;    // 11 (true converts to 1)
// 10 + false;   // 10 (false converts to 0)
// 10 + null;    // 10 (null converts to 0)
// 10 + undefined; // NaN (undefined converts to NaN)