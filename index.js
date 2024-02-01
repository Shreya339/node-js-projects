
/* example of asynchronous function execution */
let a=10;
let b=20;
// setTimeout(()=>{
//     b=30;
// },2000);
// console.log(a+b);

const waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)  //write the function that executes slowly here and pass the final value inside resolve()
    },2000)
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})