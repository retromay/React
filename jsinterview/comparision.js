// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 3);
// console.log("02" > 1);

// console.log(null > 0);

// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// === 


// console.log(undefined === 0);

// >=,<= works differently than == and will convert null into number and treating 
//it as 0.
let count = 0
function fun() {
    
    return () => {
        let y = count;
        console.log(++y);
    };
}
console.log(count)
const x = fun();
console.log(count)
x();
console.log(count)
x();

x();
