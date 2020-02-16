
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/////////////////////  1. Цифровые часы  ///////////////////////////////
////////////////////////////////////////////////////////////////////////

///////////////////////  option 1 /////////


// function clock() {
//   let date = new Date()
//   let hours = date.getHours()
//   if (hours < 10) {
//     hours = "0" + date.getHours()
//   }
//   let minutes = date.getMinutes()
//   if (minutes < 10) {
//     minutes = "0" + date.getMinutes()
//   }
//   let seconds = date.getSeconds()
//   if (seconds < 10) {
//     seconds = "0" + date.getSeconds()
//   }
//   let currentTime = hours + ":" + minutes + ":" + seconds
//   document.body.innerText = currentTime 
// }
// setInterval(clock, 1000)
// clock()



////////////////////////// option 2 ////////////


// function clock() {
//   let date = new Date()
//   let hours = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours()
//   let minutes = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes()
//   let seconds = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds()
//   let currentTime = hours + ":" + minutes + ":" + seconds
//   document.body.innerText = currentTime 
// }
// setInterval(clock, 1000) 
// clock()

////////////////////////////////////////////////////////////////////////
///////////////////// 2. Отложенная функция ////////////////////////////
////////////////////////////////////////////////////////////////////////


////////////////////////// option 1 ////////////

// setTimeout(() => {
//    console.log("I'm a delayed function")
// }, 3500)
// console.log("start result in 3.5 seconds")



////////////////////////////////////////////////


  // setTimeout(function() {
  //    console.log("I'm a delayed function")
  // }, 3500)
  // console.log("start result in 3.5 seconds")

/////////////////////////////////////////////////

// function conso() {
//   let text = "I'm a delayed function"
//   setTimeout(function() {
//     console.log(text)
//   }, 3500)  
// }
// conso()
// console.log("start result in 3.5 seconds")

////////////////////////// option 2 ////////////


// function setTim(n) { 
//   setTimeout(function() {
//     console.log("I'm a delayed function")
//   }, n) 
// }
// setTim(3500)
// console.log("start result in 3.5 seconds")




////////////////////////////////////////////////////////////////////////
////////////  3. Задание на массивы. Пузырьковая сортировка. ///////////
////////////////////////////////////////////////////////////////////////

// // Arr
// function makeArrUp(n) {
//   let resArr = [] 
//   for (let i = 0; i < n; i++) {
//   let  res = Math.floor(Math.random() * (1000 - (-1000))) + (-1000)
//     resArr[i] = res
//   } 
//   return resArr
// }
// let arrTen = makeArrUp(10)
// let arrHund = makeArrUp(100)
// let arrThous = makeArrUp(1000)
// // sort()
// function sorArr(xArr) {
//   let startSort = +new Date()
//   let feniteArr = xArr.sort(function(a, b) {
//     return a - b
//   })
//   let endSort = +new Date()
//   let timeSort = endSort - startSort
//   console.log("\n\nSort an array from " + xArr.length + ".\n" + "Total execution time = " + timeSort + "(ms).")
//   return feniteArr
// }
// let soArrTen = sorArr(arrTen)
// console.log(soArrTen)
// let soArrHund = sorArr(arrHund)
// console.log(soArrHund)
// let soArrThous = sorArr(arrThous)
// console.log(soArrThous)
// //sortBubble()
// function sortBubble(data) {
//   let  performance = window.performance
//   let startTime = performance.now()
//   var tmp
//   for (let i = 0; i < data.length - 1; i++) {  
//     for (let j = 0; j < data.length - 1; j++) {
//       if (data[j] > data[j+1]) {
//         tmp = data[j];
//         data[j] = data[j+1];
//         data[j+1] = tmp;
//       }
//     }  
//   }
//   let endTime = performance.now()
//   let time = endTime - startTime
//   console.log("\n\nBubble Sort an array from " + data.length + ".\n" + "Total execution time = " + time + "(ms)." )
//   return data
// };
// let soArrTenBubb = sortBubble(arrTen)
// console.log(soArrTenBubb)
// let soArrHundBubb = sortBubble(arrHund)
// console.log(soArrHundBubb)
// let soArrThousBubb = sortBubble(arrThous)
// console.log(soArrThousBubb)

