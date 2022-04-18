/*
proess to make a function promise based
 */
function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink==='coffee'){
             resolve('order Placed')
        }else(
            reject('Sorry,we only serve coffee')
        )
    })
}
function processOrder(order){
    return new Promise(function(resolve){
        console.log('order is being Processed')
        resolve(`coffee Served for the ${order}`)
    })
}

// Solution for above function using 
//1.Promise Scenario 
// placeOrder('coffee').then(function(orderFromCustomer){
//     console.log('Request Received')
//         let orderIsProcessed=processOrder(orderFromCustomer)
//         return orderIsProcessed
//     }).then(function(orderIsProcessed){
//         console.log(orderIsProcessed)
//     }).catch(function(err){
//         console.log('err')
//     })


// 2.we use Async-await to solve above function for make code more clear
async function serveorder(){
    try{
           const orderReceived=await placeOrder('coffee')
           console.log(orderReceived)
           const processorder=await processOrder(orderReceived)
           console.log(processorder)

    }catch(err){
        console.log(err);
    }
}
serveorder();