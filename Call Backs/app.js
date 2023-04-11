// function one () {
//  console.log("step 1")
// }

// function two() {
//     console.log("step 2")
// }
// //  calling functions
// two();
// one();
 
//  using callback function for above

// function one (call_two) {
//     call_two()
//     console.log("step 1");
   
//    }
   
//    function two() {
//        console.log("step 2")
//    }
//    one(two);






//  example for callback
let stocks = {
    Fruits : ["Apple", "Banana", "Grapes"]
}
console.log(stocks.Fruits[0]);

let order = (call_production)  => 
{
console.log('order placed');
call_production();


};

let production = ()  => {
    console.log("start production");
};

order(production);





