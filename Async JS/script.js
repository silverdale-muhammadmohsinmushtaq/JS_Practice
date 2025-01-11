console.log("One");
console.log("two");
let x=6;
let t=10;
setTimeout(hello(x, t), 4000);
console.log("Three");


function hello(x , t){
    for (i=1; i<=t; i++){
        console.log(`${x} x ${i} = ${i*x}`);
    }
}