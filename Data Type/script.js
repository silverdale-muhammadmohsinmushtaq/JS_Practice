// String
const singleQuotes = 'Hello!';
const doubleQuotes = "Hello!!";
const backticks = `${2 + 2}`;

console.log(singleQuotes);
console.log(doubleQuotes);
console.log(backticks);

// Numbers
const wholeNumber = 5;
const decimalNumber = 0.5;

console.log(wholeNumber);
console.log(decimalNumber);

// Boolean (true/false)
const isCool = true;
const isNotCool = false;

console.log(isCool);
console.log(isNotCool);

const age=20;
console.log(age > 20);
console.log(age < 20);
console.log(age == 20);


//null
const Age = null;
console.log(Age);



//Undefined
let x1;
console.log(x1);


//typeof operator
let x2 = 2000;
console.log(typeof x2);


//object
const newObject = new Object();
newObject.name = "Mohsin";
newObject.age = 26;
newObject.sex = "male";

const newObject2 = {
    name:"Faizan",
    age:27,
    gender:"male",
}

console.log(newObject.name);
console.log(newObject2.name);
console.log(`Data type of newObject is: ${typeof newObject}`);



//Array
const Arr = [1,4,8,3];
console.log(Arr);



//Date
const date = new Date();
console.log(date);
console.log(typeof date);