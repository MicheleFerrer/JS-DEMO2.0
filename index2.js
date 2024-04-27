let x = 10;
let y= x;

x = 20;

// Reference type example:

let m = {value: 10};
let n = m;

m.value = 10;

//objects are not stored in the variable like primitives are.
//primitives are copied by value and reference type of objects are copied by reference
let number = 10;
function increase(number) {
    number++; // this number variable is independnt of the let number = 10
}
increase(number);
console.log(number);

// reference type example:

let obj = { value:10 };
function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);

//user.token ='asdasdsd'; we can add extract properties on the fly

if ('radius' in circle)
console.log('circle has a radius');