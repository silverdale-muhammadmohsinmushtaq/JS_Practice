function getData(dataID, nextData){
    setTimeout(()=>{
        console.log("Data: ", dataID);
        if(nextData){
            nextData();
        }
    }, 3000);
}
//This is callback hell as it is nested callback and very difficult to understand
getData(1, ()=>{
    console.log("Getting data 2");
    getData(2, ()=>{
        console.log("Getting data 3");
        getData(3);
    });
});

