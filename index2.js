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

//if ('radius' in circle)
//console.log('circle has a radius');

//hide the details and only show the essentials-Private properties and methods-Abstraction

//this. references a new object

function Circle(radius) {
//let color = 'red' // wont be a property of red because this.color='red' hasnt been set. this is only a local variable inside of this particular function
this.radius = radius;
    let defaultLocation = { x: 0, y: 0 }; // implementation detail that we dont want to be accessed from the outside. instead of this.(propertry) we use let to  define it as a local variable
//let computeOptimumLocation = function(factor){ //allows access to private info
    this.getDefaultLocation = function(){
    return defaultLocation;
    };


    this.draw = function() {
    // this.computeOptimumLocation(0.1);  //this would be used to access private propeties
    // we can remove the this. due to closure. Closure determines what variable will be accessible to an inner function
    console.log('draw');
    };
        Object.defineProperty(this, 'defaultLocation', {
           get: function() {
            return defaultLocation; 
        }
        });
}
const Circle = new Circle(10);
circle.draw();
