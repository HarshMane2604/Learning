// // Sync in JS
// // code runs in given sequence
// //console.log("One");
// //console.log("Two");

// // The output is in sequence

// setTimeout(() => { // requires call  back
//   //console.log("hello")
// }, 4000);//AFTER 4SEC THE HELLO WILL BE VISIBLE 
// //console.log("Three")
// //console.log("Four")

// function getData(val, getNextData) {
//   setTimeout(() => {
//     console.log(val);
//     if(getNextData){
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4, () => {
//         getData(5)
//       })
//     })
//   })
// });

// // // Asynchronous Programming in JavaScript
// // Asynchronous JavaScript refers to the execution 
// // of code in a non-blocking manner, allowing other
// // operations to continue while waiting for a task to
// // complete. This is particularly useful for tasks that
// // take time, such as network requests, file reading, or
// // timers.
