// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("code is successful")
//     },2000)

// })

// data.then((item)=>{
//     console.log(item);
// })

let stocks = {
    fruits :["Strawberry","grapes","banana","apple"],
    liquid : ["water","ice"],
    holder : ["cone","cup","sticks"],
    toppings : ["chocolates","peanuts"]

};

let is_shop_open = true;
 
let order =(time,work) => {
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time)
            
        }
        else{
            reject(cosole.log("shop is closed"))
        }


    })
}
order(2000, ()=> console.log(`${stocks.fruits[0]}`))

.then(()=>{
    return order(0000, ()=>console.log("production has started"))
})


.then(()=>{
    return order(2000, ()=>console.log("the fruit was chopped"))
})

.then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} `))
})

.then(()=>{
    return order(1000, ()=>console.log("start the machine"))
})

.then(()=>{
    return order(2000, ()=>console.log(`${stocks.holder[0]}  `))
})

.then(()=>{
    return order(3000, ()=>console.log(`${stocks.toppings[0]}  `))
})

.then(()=>{
    return order(1000, ()=>console.log("serve the icecream"))
})
//  error handling and will be executed when is_shop_open is false
.catch(()=>{
    console.log("customer left")
})

.finally(()=>{
    console.log(" shop is closed")
})



