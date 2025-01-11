// Calling another function inside a function is called callback

//Way 1:

function sum(a, b){
    console.log(a + b);
}

function calculator(a, b, callBackSum){
    callBackSum(a,b);
}

calculator(3, 7, sum);

//Way 2:
/*
calculator(8 , 11 , (a, b)=>{
    console.log(a + b);
});
*/

function hello(){
    console.log("hello");
}
//setTimeOut takes callback
setTimeout(calculator(1,3,sum), 9000);