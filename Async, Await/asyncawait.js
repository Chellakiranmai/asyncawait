let stocks = {
    fruits :["Strawberry","grapes","banana","apple"],
    liquid : ["water","ice"],
    holder : ["cone","cup","sticks"],
    toppings : ["chocolates","peanuts"]

};


// let is_shop_open = true;

// let order = () => {
//     return new Promise((resolve,reject)=>{
//         if(true){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     })
// }

// async function order(){
//     try {
//         await ab;
//     }
//     catch(error){
//         console.log("ab not exists",error);
//     }
//     finally {
//         console.log("runs code anyways");
//     }
// }
let is_shop_open = true;

// let toppings_choice =()=>{
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         resolve(console.log("Toppings choice"));

//        },3000)

//     });
// };

// async function kitchen(){
//     console.log ("A")
//     console.log ("B")
//     console.log ("C")
//     await toppings_choice()
//     console.log ("D")
//     console.log ("E")
// }
// kitchen()

// console.log("cleaning dische");
// console.log("take other orders");

function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout((resolve,ms))
        }
        else{
            reject(console.log("shop is closed"));
        }
    });
}


async function kitchen() {
    try{
        await time(2000);
        console.log(`${stocks.fruits[0]}`);
    }
    catch(error){
        console.log("custoemr left",error);

    }
    finally{
        console.log("day ended");
    }
}
kitchen();