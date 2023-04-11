//  How Synchronous system Works
console.log("I")
console.log("eat")
console.log("Ice Cream")
console.log("With")
console.log("Spoon")

//  How aSynchronous system Works

console.log("I")
console.log("eat")

console.log("With")
console.log("Spoon")

setTimeout(()=>{
    console.log("Ice Cream")
},3000);