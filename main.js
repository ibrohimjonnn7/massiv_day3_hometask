// task1
// let myfunc = (arr) => arr.reduce((acc, item) =>{
//     return acc + Math.pow(item,3)
// },0)
// console.log(myfunc([]));

// task2

// let myfunc = (arr) => arr.filter((el) =>{
//     return el ? true : false;
// })
// console.log(myfunc([0,1,false,2,""]));

// task3
// let myfunc = (...arr) => arr.every((el) => {
//    return el ? true : false
// });
// console.log(myfunc(5, 4, 3, 2, 1,0));

// task4

// function myfunc(a){
//     let cnt = 0;
//     a.forEach((el,i) =>{
//        if(i % 2 == 0){
//         cnt += el;
//        }
//     })
// return cnt * a.at(-1)

// }
// console.log(myfunc([2,3,4,5]));

// task5 

// function myfunc(a,b){
//     let ansver = true;
//     a.forEach((el, i )=> {
//         if ( el !=b[i]){
//             ansver =false
//         }
//     });
//     return ansver
// }

// console.log(myfunc([1,2,3,4,5],[1,2,3,4,5]));

// task6

// function myfunc(arr1, arr2) {
//   let len = arr1.length > arr2.length ? arr1.length : arr2.length;
//   let result = [];
//   for (let i = 0; i < len; i++) {
//      result.push(arr1[i],arr2[i]);
// }
// return result.filter((el) =>el != undefined);
// }
// console.log(myfunc([1, 2, 3, 4, 1, 2, 3], [5, 6, 7, 8]));

// task7 

// function myfunc(arr) {
//     let arr1 = []
//     let arr2 = []
//     for (let i = 1; i <= arr; i++) {
//         arr1.push(i)
//     }
//     for (let i = 1; i <= arr; i++) {
//         arr2.push(arr1.map((el) => el * i))
//     }
//     return arr2
// }
// console.log(myfunc(3));

// task8 

// function findUniqueNumbers (a){
//     return a.filter(ele => a.indexOf(ele) == a.lastIndexOf(ele))   
// }
// console.log( findUniqueNumbers([1,2,3,4,5,2,4,5]));


// task9
// function formatPhoneNumber(number) {
//     let formattedNumber = "+992 ";
//     number.forEach((digit, index) => {
//         if (index === 0) {
//             formattedNumber += "(" + digit;
//         } else if (index === 3) {
//             formattedNumber += ") " + digit;
//         } else if (index === 6) {
//             formattedNumber += "-" + digit;
//         } else {
//             formattedNumber += digit;
//         }
//     });
//     return formattedNumber;
// }

// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// task10
// function totalVolume(arr) {
//      let result = 0;
//      arr.forEach((subArr) => {
//          result += subArr.reduce((acc, val) => (acc * val)+val, 1);
//      });
//      return result;
 
// }

// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
