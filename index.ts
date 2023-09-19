//synchronous
// Prepare And Serve Breakfast --- makeTea --- makeOmlete --- Serve

// function makeTea (cb:()=>void) {
//     setTimeout( ()=>{
//         console.log("Tea is ready")
//         cb ()
//     },5000)
// }

// function makeOmlete(cb:()=>void){
//     setTimeout(()=> {
//         console.log("Omlete is ready..")
//         cb()
//     },3000)
// }

// function serve(){
//     setTimeout(()=>{
//         console.log("Breakfast is served")
//     },1000)
// }

// makeTea(function(){
//     makeOmlete(function(){
//         serve()
//     })
// })

// function prepareBreakfast (){
//     setTimeout(()=>{
//         console.log("Tea is Ready...")
//         setTimeout(()=>{
//             console.log("Omlete is Ready")
//             setTimeout(()=>{
//                 console.log("Breakfast is served")
//             },1000)
//         },2000)
//     },3000)
// }


//prepareBreakfast();

// Here we are creating all code in synchronous manner. Means, our every task is dependent on other task.
// function prepareBreakfast (){
//     setTimeout( ()=>{
//         console.log("Water is boiled")
//         setTimeout(()=>{
//             console.log("Add Tea")
//             setTimeout(()=>{
//                 console.log("Add sugar")
//                 setTimeout(()=>{
//                     console.log("Milk is added")
//                     setTimeout(()=>{
//                         console.log("Tea is ready")
//                         setTimeout(()=>{
//                             console.log("Onion is chopped")
//                             setTimeout(()=>{
//                                 console.log("Tomato is ready")
//                                 setTimeout(()=>{
//                                     console.log("Omlete is ready")
//                                     setTimeout(()=>{
//                                         console.log("Breakfast is Served")
//                                     },2000)
//                                 },3000)
//                             },2000)
//                         },2000)
//                     },3000)
//                 },2000)
//             },1000)
//         },1000)
//     },3000)
// }


/* Here we are considering that task related to making Tea and tasks related to making omlete can be run
 parallel. We are running them parallel considering that both don't depend on each other. */

// function prepareBreakfast (){
//     setTimeout( ()=>{
//         console.log("Water is boiled")
//         setTimeout(()=>{
//             console.log("Add Tea")
//             setTimeout(()=>{
//                 console.log("Add sugar")
//                 setTimeout(()=>{
//                     console.log("Milk is added")
//                     setTimeout(()=>{
//                         console.log("Tea is ready")
//                         setTimeout(()=>{
//                             console.log("Breakfast is Served")
//                         },2000)
//                     },3000)
//                 },2000)
//             },1000)
//         },1000)
//     },3000)

//     setTimeout(()=>{
//         console.log("Onion is chopped")
//         setTimeout(()=>{
//             console.log("Tomato is ready")
//             setTimeout(()=>{
//                 console.log("Omlete is ready")
//             },3000)
//         },2000)
//     },2000)
// }



//prepareBreakfast()

