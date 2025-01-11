let getPromise = () =>{
    return new Promise((resolve, reject) =>{
        console.log("Promise returned successfully");
        //resolve("success");
        reject("Unsuccessful");
    });
};

//If promise resolved (fulfilled), this will be executed
let promise = getPromise();
promise.then(()=>{
    console.log("Here is success");
});

//If promise rejected, this will be executed
promise.catch(()=>{
    console.log("Failure");
});