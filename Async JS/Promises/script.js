// let x = new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     // resolve("Successful");
//     reject("Go to hell");
// });


function getData(dataID, nextData){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log(dataID);
            resolve("Successfully printed one data");
            if(nextData){
                nextData();
            }
        }, 5000);
    })
}

let x = getData(123);





// function asyncFunc1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Data 1");
//             resolve("Data 1 fetched successfully");
//         }, 5000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Data 2");
//             resolve("Data 2 fetched successfully");
//         }, 5000);
//     });
// }
// console.log("Fetching data 1");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
// });

// console.log("fetching data 2");
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// });

